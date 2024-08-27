import React from "react";

export default function SupportFAQ() {
  return (
    <section
      class="bg-gradient-to-bl from-indigo-300 via-purple-200 to-purple-300 mt-10"
      style={{ maxHeight: "25em", overflowY: "scroll" }}
    >
      <div class="container max-w-4xl px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h1>

        <div class="mt-12 space-y-8">
          <div class="border-2 border-gray-100 rounded-lg dark:border-gray-900">
            <div class="flex items-center justify-between w-full p-8">
              <h1 class="font-semibold text-gray-700 ">How does this work ?</h1>
            </div>

            <hr class="border-gray-900" />

            <p class="p-8 text-sm text-gray-700">
              You generate a QR code with just enough info for you to find it
              later. We keep the QR code alive and track how many times it has
              been scanned. Nothing more. This project remains free through
              donations.
            </p>
          </div>

          <div class="border-2 border-gray-100 rounded-lg dark:border-gray-900">
            <div class="flex items-center justify-between w-full p-8">
              <h1 class="font-semibold text-gray-700 ">
                Is there really no catch ?
              </h1>
            </div>

            <hr class="border-gray-900" />

            <p class="p-8 text-sm text-gray-700">
              Yes. We will never ask for or use <strong>ANY</strong> personally
              identifying information on you, your computer, your browsing, or{" "}
              <strong>ANYTHING</strong>. If you choose to make a donation it is
              done securely through Kofi and Stripe.
            </p>
          </div>

          <div class="border-2 border-gray-100 rounded-lg dark:border-gray-900">
            <div class="flex items-center justify-between w-full p-8">
              <h1 class="font-semibold text-gray-700 ">
                Group Codes - What and Why?
              </h1>
            </div>

            <hr class="border-gray-900" />

            <p class="p-8 text-sm text-gray-700">
              The Group Code allows you to search for a QR code using its
              &quot;name&quot; Group codes allow you to annonymously group your
              QR codes together, create a &quot;password&quot; for them if
              you&apos;d prefer them to be invisible, and allows you to easily
              share QR codes with others.
            </p>
          </div>

          <div class="border-2 border-gray-100 rounded-lg dark:border-gray-900">
            <div class="flex items-center justify-between w-full p-8">
              <h1 class="font-semibold text-gray-700 ">
                Who does the contact form go to ?
              </h1>
            </div>

            <hr class="border-gray-900" />

            <p class="p-8 text-sm text-gray-700">
              The person developing the QR service :)
            </p>
          </div>

          <div class="border-2 border-gray-100 rounded-lg dark:border-gray-900">
            <div class="flex items-center justify-between w-full p-8">
              <h1 class="font-semibold text-gray-700 ">Private QR ?</h1>
            </div>

            <hr class="border-gray-900" />

            <p class="p-8 text-sm text-gray-700">
              If you mark your QR as invisible then only you (or anyone who has
              that group code) can see it. These QR codes are not made to be
              entirely private and inaccessible. THE Free QR is made to allow
              your QR codes to thrive in view, but in complete annonymity!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
