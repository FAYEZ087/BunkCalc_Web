import { Smartphone, CheckCircle2 } from 'lucide-react';

export default function Support() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4 dark:text-white">Support Center</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything you need to get BunkCalc running smoothly on your device.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Setup Guide */}
          <div id="setup" className="scroll-mt-32">
            <h2 className="text-3xl font-black mb-8 dark:text-white flex items-center gap-3">
              <Smartphone className="text-blue-600" />
              Setup Guide
            </h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Download APK", text: "Click any download button on our site to get the latest BunkCalc.apk file." },
                { step: "2", title: "Enable Sideloading", text: "Android will prompt you to 'Allow installation from this source'. Toggle this on for your browser or file manager." },
                { step: "3", title: "Install & Launch", text: "Open the downloaded file and click 'Install'. Once finished, launch BunkCalc from your app drawer." },
                { step: "4", title: "Grant Permissions", text: "For the best experience, allow Notification and Alarm permissions so you never miss a class reminder." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex-shrink-0 flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white mb-1 text-lg">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="scroll-mt-32">
            <h2 className="text-3xl font-black mb-8 dark:text-white flex items-center gap-3">
              <CheckCircle2 className="text-blue-600" />
              Common Questions
            </h2>
            <div className="space-y-6">
              {[
                { q: "Is BunkCalc free to use?", a: "Absolutely. BunkCalc is a community project for students. There are no ads, no subscriptions, and no hidden costs." },
                { q: "Is my data private?", a: "100%. BunkCalc doesn't have a backend. All your data stays on your phone. If you delete the app, your data is gone unless you've exported a backup." },
                { q: "How accurate is the 'Safe to Bunk' logic?", a: "The logic is based on standard 75% requirements and your specific subject credits. It's a mathematically precise projection based on the records you enter." },
                { q: "What happens if I change my phone?", a: "You can use the 'Export Data' feature in settings to save a .json file. Simply 'Import' that file on your new device to restore everything." },
                { q: "Does it support Lab classes?", a: "Yes! When adding a subject, you can set the 'Lab Multiplier' which will count one attendance as two classes, matching university standards." },
                { q: "Why am I not getting notifications?", a: "Ensure you've granted 'Exact Alarm' and 'Notification' permissions. Some Android skins (like MIUI) might require you to allow 'Autostart' for the app." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <h4 className="font-bold dark:text-white mb-3 text-lg">{item.q}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
