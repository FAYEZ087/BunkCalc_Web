export default function Privacy() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto prose dark:prose-invert">
        <h1 className="text-5xl font-black mb-8 dark:text-white uppercase italic">Privacy Policy</h1>
        <p className="text-slate-500 font-bold mb-12">Effective Date: August 29, 2026 &bull; Version 2.2.0</p>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">1. Introduction</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            BunkCalc ("the App", "we", "our", "us") is an attendance-tracking application developed by <a href="https://github.com/PinecoXZ" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold underline">PinecoXZ</a>. This Privacy Policy describes how the App handles information when you install and use BunkCalc on the web or your personal device. By using BunkCalc, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">2. Our Privacy Commitment</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            BunkCalc is designed with a <span className="font-bold text-slate-900 dark:text-white">local-first, zero-collection architecture</span>. All your data — including attendance records, subject schedules, semester preferences, and application settings — is stored exclusively on your device using the platform's native encrypted key-value storage (SharedPreferences on Android). We do not operate backend servers, databases, cloud infrastructure, or analytics platforms of any kind.
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-400 italic">In simple terms: <strong>your data never leaves your device.</strong></p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">3. Information We Do Not Collect</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            We want to be unambiguous. BunkCalc does <span className="font-bold text-slate-900 dark:text-white">not</span> collect, transmit, store on remote servers, or share with any third parties:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600 dark:text-slate-400">
            <li>Personal Identifiable Information (PII) such as your name, email address, phone number, or student ID</li>
            <li>Location data, GPS coordinates, or IP addresses</li>
            <li>Device identifiers (IMEI, Advertising ID, hardware serial numbers)</li>
            <li>Biometric templates, fingerprint scans, or facial recognition geometry</li>
            <li>Usage analytics, behavioural data, or session recordings</li>
            <li>Crash logs or diagnostic telemetry</li>
            <li>Contacts, photos, camera, microphone, or any media</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">4. Device Permissions & Biometrics</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            BunkCalc requests the following device permissions solely for the features described below. Each permission is opt-in and can be revoked at any time through your device's system settings.
          </p>
          <div className="grid gap-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm mb-2">Biometric Authentication</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Used for optional biometric app lock. Verification is executed entirely through the Android OS BiometricPrompt API within the device's secure hardware enclave (TEE/Secure Element). BunkCalc NEVER accesses, stores, reads, or transmits biometric templates, raw fingerprints, or facial data.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm mb-2">Notifications</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Used to deliver scheduled class reminders before lectures, post-class attendance marking prompts, and threshold alerts. Notifications are scheduled locally on-device and never routed through external services.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm mb-2">Haptic Feedback</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Used to provide tactile confirmation when marking attendance. This can be disabled in Settings.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm mb-2">File Storage</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Accessed only when you manually export a backup file, generate a calendar file (.ics), or generate a shareable attendance card image.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">5. Data Retention & Deletion</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Your data persists on your device until you reset the app via Settings, clear the application data in Android settings, or uninstall BunkCalc. Since no data is transmitted to our servers, deletion from your device is instant, complete, and permanent.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">6. Security & Encryption</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            BunkCalc follows security best practices: Content Security Policy (CSP), strict input sanitization to eliminate HTML injection/XSS, schema validation on import, and zero external tracking SDKs.
          </p>
        </section>
      </div>
    </div>
  );
}
