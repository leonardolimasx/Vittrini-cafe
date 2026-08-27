import LoginForm from '@/components/home/admin/LoginForm'

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-terracota-800">
          Painel do Vittrini
        </h1>
        <LoginForm />
      </div>
    </main>
  )
}
