import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <Container>
        <div className="mx-auto max-w-4xl px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold">Paid Earlier</h1>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">English</h2>
            <p>
              QuakeSense has switched to a free + in-app purchase model since
              version 1.5. Users who paid earlier will receive permanent access
              to QuakeSense Pro. Please contact feedback@quakesense.app to
              obtain your redemption code.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">简体中文</h2>
            <p>
              QuakeSense 从 1.5 版本调整为免费 + 内购模式，之前已付费用户将获得
              QuakeSense Pro 的永久使用权。请联系 feedback@quakesense.app
              获取兑换码。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">繁體中文</h2>
            <p>
              QuakeSense 從 1.5 版本調整為免費 + 內購模式，之前已付費用戶將獲得
              QuakeSense Pro 的永久使用權。請聯繫 feedback@quakesense.app
              獲取兌換碼。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">日本語</h2>
            <p>
              QuakeSenseは1.5バージョンから無料+アプリ内課金モデルに変更されました。以前に支払いを済ませたユーザーはQuakeSense
              Proの永久使用権を獲得します。交換コードを取得するには、feedback@quakesense.appまでご連絡ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Türkçe</h2>
            <p>
              QuakeSense, 1.5 sürümünden itibaren ücretsiz + uygulama içi satın
              alma modeline geçmiştir. Daha önce ödeme yapmış olan kullanıcılar
              QuakeSense Pro'ya kalıcı erişim hakkı kazanacaklardır. Lütfen
              değişim kodunuzu almak için feedback@quakesense.app ile iletişime
              geçin.
            </p>
          </section>
        </div>
      </Container>
    </Layout>
  )
}
