import Footer from "./(dashboards)/components/Footer"

export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-tr from-blue-900 to-slate-700 min-h-screen">
      <header className="py-12">
        <img src="/white_logo_title.png" className="w-[420px] h-auto mx-auto" />
      </header>
      <main className="flex flex-col items-center bg-inherit p-12">

        <form className="flex flex-col gap-10 p-8 rounded-2xl bg-gray-300 bg-opacity-60">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Bienvenido al Guardian Bank</h1>
            <p className="text-sm">Inicia sesion para acceder a su cuenta</p>
          </div>
          <div className="form-group gap-5">
            <div className="form-field">
              <label className="form-label text-black">Email</label>
              <input placeholder="Introduzca su email aqui" type="email" className="input max-w-full border-[1px] bg-white border-gray-500" />
            </div>
            <div className="form-field">
              <label className="form-label text-black">Clave</label>
              <input placeholder="Introduzca su clave aqui" type="password" className="input max-w-full border-[1px] bg-white border-gray-500" />
            </div>
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button type="submit" className="btn btn-primary w-full">Iniciar Sesion</button>
              </div>
            </div>

            <div className="form-field">
              <div className="form-control justify-center">
                <a href="login" className="link link-underline-hover link-primary text-sm">¿Ya tiene una cuenta? Inicie Sesion.</a>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
    <Footer></Footer>
    </>
  )
}
