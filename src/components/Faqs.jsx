import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is QuakeSense?',
      answer:
        'QuakeSense is a global earthquake alert app that offers real-time information about earthquakes happening around the world.',
    },
    {
      question: "What is the source of Quake Sense's data?",
      answer:
        'QuakeSense uses data from the United States Geological Survey (USGS), European-Mediterranean Seismological Centre (EMSC), China Earthquake Networks Center (CENC), Japan Meteorological Agency (JMA), Taiwan Central Weather Bureau (CWB), and other sources.',
    },
    {
      question: 'Why did I get several earthquake notifications?',
      answer:
        'QuakeSense uses data from multiple sources to provide the most accurate information about earthquakes. If multiple sources report the same earthquake, you may receive multiple notifications. Different sources may also report different magnitudes for the same earthquake. Same source may also update the magnitude of the earthquake.',
    },
  ],
  [
    {
      question: 'How does QuakeSense work?',
      answer:
        'QuakeSense uses data from multiple sources to provide real-time information about earthquakes. The app sends push notifications to users when an earthquake is detected near their location.',
    },
    {
      question: 'Can QuakeSense predict earthquakes before they happen?',
      answer:
        'Earthquakes cannot be predicted, and no apps or services can forecast them. However, QuakeSense offers real-time information about earthquakes that have already occurred.',
    },
  ],
  [
    {
      question: 'Does QuakeSense collect my data?',
      answer:
        'QuakeSense does not collect any personal data from users. The app only uses location data to provide earthquake alerts. We only apply the reduced accuracy location permission to protect your privacy.',
    },
    {
      question: 'What technologies does QuakeSense use?',
      answer:
        'QuakeSense uses SwiftUI for the iOS app, it is a 100% native app. Cloudflare Workers for the backend, and Next.js & Tailwind CSS for the website.',
    },
    {
      question: 'Why is QuakeSense not free?',
      answer:
        'While the data source is free, our server incurs costs. To ensure ongoing maintenance and improvement of this project, developers require financial support. If you are not satisfied with your purchase, you can request a refund from the App Store. Please note that only Apple can approve refunds; developers do not have this authority.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="mt-2 pt-12 text-lg text-gray-600">
          If you have anything else you want to ask,{' '}
          <a
            href="mailto:feedback@quakesense.app"
            className="text-gray-900 underline"
          >
            reach out to us
          </a>
          .
        </p>
      </Container>
    </section>
  )
}
