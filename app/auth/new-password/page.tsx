"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleCheck, CircleX, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

function AuthPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (password: string) => {
    return {
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasMinLength: password.length >= 8,
    };
  };

  const passwordValidation = validatePassword(newPassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8 flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">New Password</h2>
          <p className="text-sm text-gray-500">
            Set up a new password to protect your account.
          </p>
        </div>

        {/* New Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            New Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="py-1.5 px-3 text-sm"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className=""
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Password Strength Indicator */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <span
            className={`h-1 ${
              passwordValidation.hasUppercase ? "bg-green-500" : "bg-gray-300"
            } rounded-2xl`}
          ></span>
          <span
            className={`h-1 ${
              passwordValidation.hasNumber ? "bg-green-500" : "bg-gray-300"
            } rounded-2xl`}
          ></span>
          <span
            className={`h-1 ${
              passwordValidation.hasMinLength ? "bg-green-500" : "bg-gray-300"
            } rounded-2xl`}
          ></span>
        </div>

        <div>
          <p>
            {newPassword.length === 0
              ? "Enter a password to see its strength."
              : "Password strength:"}
          </p>
          <div className="flex items-center gap-2 mt-2">
            {passwordValidation.hasUppercase ? (
              <CircleCheck className="text-green-500 size-5" />
            ) : (
              <CircleX className="text-gray-300 size-5" />
            )}
            <span className="text-sm text-[#8C8C8C]">At least 1 uppercase</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            {passwordValidation.hasNumber ? (
              <CircleCheck className="text-green-500 size-5" />
            ) : (
              <CircleX className="text-gray-300 size-5" />
            )}
            <span className="text-sm text-[#8C8C8C]">At least 1 number</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            {passwordValidation.hasMinLength ? (
              <CircleCheck className="text-green-500 size-5" />
            ) : (
              <CircleX className="text-gray-300 size-5" />
            )}
            <span className="text-sm text-[#8C8C8C]">
              At least 8 characters
            </span>
          </div>
        </div>

        {/* Continue Button */}
        <Button
          className="w-full mt-4 bg-blue-600 cursor-pointer hover:bg-blue-500 py-3 px-[18px]"
          disabled={
            !(
              passwordValidation.hasUppercase &&
              passwordValidation.hasNumber &&
              passwordValidation.hasMinLength &&
              newPassword === confirmPassword
            )
          }
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default AuthPage;
