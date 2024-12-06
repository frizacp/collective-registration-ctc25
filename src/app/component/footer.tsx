export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className='bg-black text-white text-center py-2 text-sm font-semibold'>
        &copy; {currentYear} Coast to Coast Night Trail Ultra. All Right
        Reserved
      </div>
    </div>
  );
}
