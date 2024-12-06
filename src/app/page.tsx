import Header from './component/navbar';
import Footer from './component/footer';

type Repository = {
  uuid: string;
  nama: string;
  harga: number;
  qty: number;
  sisa: number;
};

export default async function Home() {
  const res = await fetch('https://tias.co.id/api/kategori-event?key=CTCULTRA');
  const jsonResponse = await res.json();

  if (jsonResponse.status !== 200) {
    return <h1>Error fetching data</h1>;
  }

  const repositories: Repository[] = jsonResponse.data; // Ambil array dari data
  return (
    <div className='bg-slate-100'>
      <Header />
      <div className=' container mx-auto w-1/2 bg-white px-14 py-8'>
        <div className=' p-2 border-2 border-red-500 rounded-md mb-4'>
          <h1 className='text-center font-semibold'>INFORMATION</h1>
          <p className='text-center'>
            1 registration package consists of 10 participants.
          </p>
        </div>
        <div>
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className='flex justify-between items-center my-3 border border-slate-300 rounded-md p-3'
            >
              <h1 className='text-left font-bold'>Runner {index + 1}</h1>
              <select
                defaultValue=''
                className='border border-slate-100 rounded-md p-2'
              >
                {/* Default value */}
                <option value='' disabled>
                  Select Category
                </option>
                {/* Options dari data */}
                {repositories.map((repo) => (
                  <option key={repo.uuid} value={repo.uuid}>
                    {repo.nama} - Rp. {repo.harga.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
