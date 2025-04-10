'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function VerificationCodePage() {
  const [code, setCode] = useState(["", "", "", ""])

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return // faqat raqam
    const updated = [...code]
    updated[index] = value
    setCode(updated)
    // Avtomatik focus o‘zgartirish
    const nextInput = document.getElementById(`code-${index + 1}`)
    if (value && nextInput) {
      ;(nextInput as HTMLInputElement).focus()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-xl p-6">
        <CardContent className="space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-semibold">Enter Verification Code</h2>
            <p className="text-sm text-gray-500 mt-1">
              We’ve sent a code to <span className="font-semibold">+998 90 000 00 00</span>
            </p>
          </div>

          <div className="flex justify-center gap-2">
            {code.map((digit, index) => (
              <Input
                key={index}
                id={`code-${index}`}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-12 h-12 text-center text-xl font-bold"
              />
            ))}
          </div>

          <Button className="w-full">Reset Password</Button>

          <div className="text-sm text-gray-500">
            Experiencing issues receiving the code?{" "}
            <button className="underline text-blue-500 hover:text-blue-700">Resend code</button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
