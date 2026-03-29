import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-20">
      <Container>
        <div className="text-center">
          <h1 className="text-8xl font-bold text-primary-500 font-heading">404</h1>
          <h2 className="text-2xl font-bold text-slate-900 mt-4 font-heading">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-slate-600 mt-3 max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
          <div className="mt-8">
            <Button href="/" variant="primary">
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
