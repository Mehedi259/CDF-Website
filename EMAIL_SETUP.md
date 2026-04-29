# Email Setup Guide for Contact Form

এই guide টি follow করে আপনি contact form থেকে সরাসরি আপনার Gmail এ email পাবেন।

## 🚀 Quick Setup (2 Options)

### Option 1: EmailJS (Recommended - Direct Email Delivery)

EmailJS ব্যবহার করলে form submit করার সাথে সাথে সরাসরি আপনার Gmail এ email চলে যাবে।

#### Step 1: EmailJS Account তৈরি করুন

1. যান: https://www.emailjs.com/
2. **Sign Up** করুন (Free account যথেষ্ট - মাসে 200 emails free)
3. Email verify করুন

#### Step 2: Email Service যুক্ত করুন

1. Dashboard এ যান: https://dashboard.emailjs.com/admin
2. **Email Services** এ ক্লিক করুন
3. **Add New Service** বাটনে ক্লিক করুন
4. **Gmail** select করুন
5. **Connect Account** এ ক্লিক করে আপনার Gmail দিয়ে login করুন
6. Service তৈরি হলে **Service ID** copy করুন (যেমন: `service_abc123`)

#### Step 3: Email Template তৈরি করুন

1. **Email Templates** এ যান
2. **Create New Template** এ ক্লিক করুন
3. Template Name দিন: `contact_form`
4. নিচের template টি paste করুন:

**Subject:**
```
New Quote Request from {{company_name}}
```

**Content:**
```
New Production Quote Request

Full Name: {{from_name}}
Business Email: {{from_email}}
Company Name: {{company_name}}
Phone Number: {{phone_number}}

Project Requirements:
{{message}}

---
This inquiry was submitted through the CDF Studio website contact form.
```

5. **To Email** field এ আপনার email দিন যেখানে message পেতে চান
6. **Save** করুন এবং **Template ID** copy করুন (যেমন: `template_xyz789`)

#### Step 4: Public Key নিন

1. **Account** > **General** এ যান
2. **Public Key** copy করুন (যেমন: `abcXYZ123456789`)

#### Step 5: Environment Variables সেট করুন

1. Project এর root এ `.env.local` file তৈরি করুন (যদি না থাকে)
2. নিচের lines যুক্ত করুন:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcXYZ123456789
```

**Important:** আপনার actual IDs দিয়ে replace করুন!

#### Step 6: Test করুন

1. Development server চালু করুন: `npm run dev`
2. Contact form fill করুন
3. Submit করুন
4. আপনার Gmail check করুন!

---

### Option 2: Mailto Link (Fallback - No Setup Required)

যদি EmailJS setup না করেন, তাহলে automatically mailto link কাজ করবে। এটা user এর email client open করবে pre-filled message সহ।

**কোন setup লাগবে না!** এটা already implemented আছে।

---

## 🔧 Vercel Deployment এ Environment Variables যুক্ত করা

1. Vercel Dashboard এ যান: https://vercel.com/dashboard
2. আপনার project select করুন
3. **Settings** > **Environment Variables** এ যান
4. তিনটি variables যুক্ত করুন:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
5. **Save** করুন
6. Project **Redeploy** করুন

---

## 📧 কিভাবে কাজ করে?

1. User contact form fill করে
2. Submit button এ click করে
3. EmailJS configured থাকলে:
   - সরাসরি আপনার Gmail এ email যাবে
   - User একটা success message দেখবে
4. EmailJS configured না থাকলে:
   - User এর email client open হবে
   - Pre-filled message থাকবে
   - User send button click করবে

---

## 🎯 Recommended: EmailJS Setup করুন

EmailJS setup করলে:
- ✅ Professional experience
- ✅ Automatic email delivery
- ✅ No user action needed
- ✅ Email tracking
- ✅ Free for 200 emails/month

---

## 🆘 সমস্যা হলে?

যদি email না আসে:
1. EmailJS Dashboard এ **Logs** check করুন
2. Browser console check করুন (F12)
3. Gmail এর Spam folder check করুন
4. Environment variables সঠিক আছে কিনা verify করুন

---

## 📝 Note

বর্তমানে form এ যে email address আছে: **info@cdfstudio.com**

এটা change করতে চাইলে:
- `components/contact/ContactSection.tsx` file এ `to_email` এবং `mailto:` links update করুন
