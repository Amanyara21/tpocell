import Link from 'next/link';

const NavbarPlacement = () => {
  return (
    <div className="bg-gold">
      <div className="mx-auto flex justify-between px-8 items-center">
        <div className="text-white">
          <h2 className="text-3xl font-bold">Placement Data</h2>
        </div>
        
        <div className='flex gap-20'>
          <Link href="/">
            <button className="button btn py-3 px-8">Home</button>
          </Link>
          <Link href="/login">
            <button className="button btn py-3 px-8">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarPlacement;
