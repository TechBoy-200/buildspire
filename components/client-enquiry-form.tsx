
"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

const initialForm = {
  full_name: "",
  email: "",
  phone: "",
  company_name: "",
  service_type: "",
  project_description: "",
  budget: "",
  timeline: "",
};

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-[#0d0b12] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[#716a7c] focus:border-[#8804E4]";

export default function ClientEnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function updateField(
    field: keyof typeof initialForm,
    value: string
  ) {
    setForm((previous) => ({ ...previous, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setSuccess(false);

    const { error } = await supabase
      .from("client_enquiries")
      .insert([form]);

    setLoading(false);

    if (error) {
      console.error("Enquiry submission error:", error);
      setMessage("Something went wrong. Please try again.");
      return;
    }

    setSuccess(true);
    setMessage("Your enquiry has been received. We'll be in touch!");
    setForm(initialForm);
  }

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#100d16] p-5 text-left sm:p-7">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">
          Tell us about your project.
        </h3>
        <p className="mt-2 text-xs leading-6 text-[#9992a2]">
          Share a little about what you're looking to build.
          Our team will get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
              Full name *
            </label>
            <input
              required
              maxLength={100}
              autoComplete="name"
              className={fieldClass}
              placeholder="Your name"
              value={form.full_name}
              onChange={(e) => updateField("full_name", e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
              Email address *
            </label>
            <input
              required
              type="email"
              maxLength={254}
              autoComplete="email"
              className={fieldClass}
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
              Phone number
            </label>
            <input
              type="tel"
              maxLength={30}
              autoComplete="tel"
              className={fieldClass}
              placeholder="+234..."
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
              Company / Organisation
            </label>
            <input
              maxLength={150}
              autoComplete="organization"
              className={fieldClass}
              placeholder="Company name"
              value={form.company_name}
              onChange={(e) => updateField("company_name", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
            What do you need? *
          </label>
          <select
            required
            className={fieldClass}
            value={form.service_type}
            onChange={(e) => updateField("service_type", e.target.value)}
          >
            <option value="">Select a service</option>
            <option value="Website Development">Website Development</option>
            <option value="Software Development">Software Development</option>
            <option value="Mobile Application">Mobile Application</option>
            <option value="Digital Product Development">Digital Product Development</option>
            <option value="Custom Technology Solution">Custom Technology Solution</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
            Tell us about your project *
          </label>
          <textarea
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            className={`${fieldClass} resize-y`}
            placeholder="What are you trying to build? What problem are you looking to solve?"
            value={form.project_description}
            onChange={(e) =>
              updateField("project_description", e.target.value)
            }
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
              Estimated budget
            </label>
            <select
              className={fieldClass}
              value={form.budget}
              onChange={(e) => updateField("budget", e.target.value)}
            >
              <option value="">Select budget</option>
              <option value="Below ₦100,000">Below ₦100,000</option>
              <option value="₦100,000 – ₦300,000">₦100,000 – ₦300,000</option>
              <option value="₦300,000 – ₦500,000">₦300,000 – ₦500,000</option>
              <option value="₦500,000 – ₦1,000,000">₦500,000 – ₦1,000,000</option>
              <option value="Above ₦1,000,000">Above ₦1,000,000</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
              Expected timeline
            </label>
            <select
              className={fieldClass}
              value={form.timeline}
              onChange={(e) => updateField("timeline", e.target.value)}
            >
              <option value="">Select timeline</option>
              <option value="As soon as possible">As soon as possible</option>
              <option value="Within 2 weeks">Within 2 weeks</option>
              <option value="Within a month">Within a month</option>
              <option value="1–3 months">1–3 months</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>

        {message && (
          <div
            role="status"
            className={`flex items-start gap-2 rounded-xl border p-4 text-xs leading-6 ${
              success
                ? "border-green-500/20 bg-green-500/10 text-green-300"
                : "border-red-500/20 bg-red-500/10 text-red-300"
            }`}
          >
            {success && <CheckCircle2 size={17} className="mt-1 shrink-0" />}
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#8804E4] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#7200c4] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 size={17} className="animate-spin" />
              Sending enquiry...
            </>
          ) : (
            <>
              Submit project enquiry
              <ArrowUpRight size={17} />
            </>
          )}
        </button>

        <p className="text-center text-[10px] leading-5 text-[#77717f]">
          Your information will only be used to respond to your enquiry.
        </p>
      </form>
    </div>
  );
}
