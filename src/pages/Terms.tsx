export default function Terms() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto prose dark:prose-invert">
        <h1 className="text-5xl font-black mb-8 dark:text-white uppercase italic">Terms of Service</h1>
        <p className="text-slate-500 font-bold mb-12">Effective Date: May 1, 2026 &bull; Version 1.1</p>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">1. Acceptance of Terms</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            By downloading, installing, or using BunkCalc ("the App"), you ("the User") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the App.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">2. Description of Service</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            BunkCalc is a personal attendance management tool designed for university students. The App operates entirely offline with local-only data storage. No account creation or internet connection is required for core functionality.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">3. Accuracy of Calculations</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            While we endeavour to ensure mathematical accuracy in all computations, the App is provided as an <span className="font-bold text-slate-900 dark:text-white">assistive tool only</span>.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600 dark:text-slate-400 text-sm">
            <li>The accuracy of results depends entirely on the accuracy of the data you provide.</li>
            <li>BunkCalc does not verify against your institution's official systems (e.g., ERP portals).</li>
            <li>You are solely responsible for cross-verifying your attendance with official records before making academic decisions.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">4. Disclaimer of Warranties</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed uppercase font-bold text-sm">
            THE APP IS PROVIDED ON AN "AS IS" BASIS WITHOUT WARRANTIES OF ANY KIND. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED OR ERROR-FREE.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">5. Limitation of Liability</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            In no event shall BunkCalc or its developers be liable for any academic penalties, debarment, or loss of examination eligibility resulting from the use of the app. Your use of BunkCalc is entirely at your own risk.
          </p>
        </section>

        <section className="mb-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-3xl border border-blue-100 dark:border-blue-800 text-center">
          <h2 className="text-xl font-black mb-2 dark:text-white">Legal Inquiries</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Reach out to <a href="mailto:legal@bunkcalc.app" className="text-blue-600 font-bold">legal@bunkcalc.app</a>
          </p>
        </section>
      </div>
    </div>
  );
}
