import { Button } from '@/components/Button'
import { AppDemo } from '@/components/AppDemo'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g clip-path="url(#clip0_2_2)">
        <path
          d="M12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
          stroke="#D4D4D4"
        />
        <path
          d="M8.94844 8C11.1292 8 12.8969 9.78002 12.8969 11.9756C12.8969 14.1712 11.129 15.951 8.94844 15.951C6.76794 15.951 5 14.1712 5 11.9756C5 9.78008 6.76777 8 8.94844 8ZM15.2539 8.23286C16.3443 8.23286 17.2282 9.90837 17.2282 11.9756H17.2283C17.2283 14.0423 16.3444 15.7183 15.2541 15.7183C14.1638 15.7183 13.2799 14.0423 13.2799 11.9756C13.2799 9.90892 14.1636 8.23286 15.254 8.23286H15.2539ZM18.3056 8.62273C18.689 8.62273 19 10.1238 19 11.9756C19 13.8268 18.6892 15.3285 18.3056 15.3285C17.9221 15.3285 17.6114 13.8272 17.6114 11.9756C17.6114 10.124 17.9223 8.62273 18.3056 8.62273Z"
          fill="#A3A3A3"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_2">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Global Earthquake Alerts
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              QuakeSense is a SwiftUI native app that delivers global earthquake
              alerts using multiple data sources for the most accurate and
              timely notifications.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <AppStoreLink />
              <Button
                href="https://medium.com/@huhuhang/quakesense-a-minimalist-native-ios-app-for-earthquake-alerts-1275fecf160c"
                variant="outline"
              >
                <PlayIcon className="h-6 w-6 flex-none" />
                <span className="ml-2.5">Review on Medium</span>
              </Button>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="-mx-4 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-0 xl:-bottom-32">
              <PhoneFrame className="mx-auto" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
