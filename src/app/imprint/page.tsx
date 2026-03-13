import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Imprint | Rhutik Sahu',
  description: 'Legal imprint and disclaimer information',
};

export default function ImprintPage() {
  return (
    <div className="py-12 sm:py-20 px-4">
      <MaxWidthWrapper>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-70 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          {/* Title */}
          <div className="space-y-4 border-b border-border pb-8">
            <h1 className="text-4xl sm:text-5xl font-bold">Imprint</h1>
            <p className="text-lg text-muted-foreground">Legal information and disclaimer</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-muted-foreground">
            {/* Responsible */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Responsible for content</h2>
              <div className="space-y-2">
                <p>
                  <strong className="text-foreground">Rhutik Sahu</strong>
                </p>
                <p>
                  <strong className="text-foreground">Contact:</strong> <br />
                  <a href="mailto:contact@rhutik.dev" className="text-accent hover:opacity-70 transition-opacity">
                    contact@rhutik.dev
                  </a>
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Disclaimer</h2>
              <div className="space-y-2">
                <p>
                  The content of this website is provided on an &quot;as is&quot; basis. While I strive to provide
                  accurate and current information, I make no representations or warranties of any kind regarding the
                  completeness, accuracy, reliability, suitability, or availability of the information contained herein.
                </p>
                <p>
                  Any reliance you place on such information is therefore strictly at your own risk. In no event will I
                  be liable to you in relation to the contents of, or use of, or otherwise in connection with, this
                  website for any indirect, special, or consequential loss, or for any business losses, loss of
                  revenue, income, profits, or anticipated savings.
                </p>
              </div>
            </section>

            {/* External Links */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">External Links</h2>
              <p>
                This website may contain links to external websites. I am not responsible for the content,
                accuracy, or practices of external websites. The inclusion of any link does not imply endorsement
                of the linked website or its content.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Intellectual Property Rights</h2>
              <p>
                Unless otherwise stated, the copyright and other intellectual property rights in all content on this
                website (including text, graphics, logos, images, and software) are the property of Rhutik Sahu or
                licensed to Rhutik Sahu. These works are protected by copyright laws and international copyright
                treaties.
              </p>
            </section>

            {/* Privacy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Privacy</h2>
              <p>
                Any personal data you provide through this website will be handled in accordance with applicable
                data protection laws. Please refer to our privacy policy for more information about how we handle
                your data.
              </p>
            </section>

            {/* Governing Law */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Governing Law</h2>
              <p>
                This website and all content herein are governed by and construed in accordance with applicable laws.
              </p>
            </section>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
