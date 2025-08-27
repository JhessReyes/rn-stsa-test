package com.nativebiometrics

import androidx.biometric.BiometricManager
import androidx.biometric.BiometricPrompt
import android.content.Context
import android.content.SharedPreferences
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactMethod

class NativeBiometricsModule (reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    private val context: ReactApplicationContext = reactContext
    private var biometricPrompt: BiometricPrompt? = null
    override fun getName() = NAME

    @ReactMethod
    fun isAvailable(promise: Promise) {
        val biometricManager = BiometricManager.from(context)
        val canAuth = biometricManager.canAuthenticate(
            BiometricManager.Authenticators.BIOMETRIC_STRONG or
                    BiometricManager.Authenticators.DEVICE_CREDENTIAL
        )

        val available = canAuth == BiometricManager.BIOMETRIC_SUCCESS

        val result = Arguments.createMap()
        result.putBoolean("available", available)
        result.putString("biometryType", if (available) "biometric" else "none")

        return promise.resolve(result)
    }

    @ReactMethod
    fun authenticate(reason: String, allowDevicePasscode: Boolean, promise: Promise) {
        val activity = context.currentActivity as? androidx.fragment.app.FragmentActivity
            ?: run {
                promise.reject("NO_ACTIVITY", "Current activity is not a FragmentActivity")
                return
            }

        activity.runOnUiThread {
            activity.window.decorView.post {
                val executor = ContextCompat.getMainExecutor(activity)

                biometricPrompt = BiometricPrompt(
                    activity,
                    executor,
                    object : BiometricPrompt.AuthenticationCallback() {
                        override fun onAuthenticationSucceeded(result: BiometricPrompt.AuthenticationResult) {
                            promise.resolve(Arguments.createMap().apply { putBoolean("success", true) })
                        }

                        override fun onAuthenticationError(errorCode: Int, errString: CharSequence) {
                            promise.resolve(Arguments.createMap().apply {
                                putBoolean("success", false)
                                putString("code", errorCode.toString())
                                putString("error", errString.toString())
                            })
                        }

                        override fun onAuthenticationFailed() {
                            promise.resolve(Arguments.createMap().apply {
                                putBoolean("success", false)
                                putString("error", "Authentication failed")
                            })
                        }
                    }
                )

                val promptInfoBuilder = BiometricPrompt.PromptInfo.Builder()
                    .setTitle(reason ?: "Authentication required")

                if (allowDevicePasscode) {
                    promptInfoBuilder.setAllowedAuthenticators(
                        BiometricManager.Authenticators.BIOMETRIC_STRONG or
                                BiometricManager.Authenticators.DEVICE_CREDENTIAL
                    )
                } else {
                    promptInfoBuilder.setAllowedAuthenticators(
                        BiometricManager.Authenticators.BIOMETRIC_STRONG
                    )
                }

                biometricPrompt?.authenticate(promptInfoBuilder.build())
            }
        }
    }


    companion object {
        const val NAME = "NativeBiometricsModule"
    }
}