import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const FilterForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedQuery = createQueryString(name, value);
    router.replace(`${pathname}?${updatedQuery}`);
  };

  return (
    <form className="flex flex-wrap gap-4 my-4 px-4">
      <div className="flex-1">
        <select
          name="department"
          value={searchParams.get('department') || ''}
          onChange={handleInputChange}
          className="form-control w-full p-4 border text-xl rounded text-black"
        >
          <option value="" className="text-black">Select Branch</option>
          <option value="CSE" className="text-black">Computer Science Engineering</option>
          <option value="ECE" className="text-black">Electronics and Communication Engineering</option>
          <option value="Mech" className="text-black">Mechanical Engineering</option>
          <option value="BT" className="text-black">Biotechnology</option>
        </select>
      </div>
      <div className="flex-1">
        <input
          type="text"
          name="company"
          value={searchParams.get('company') || ''}
          onChange={handleInputChange}
          placeholder="Company name"
          className="form-control w-full p-4 border rounded text-xl text-black"
        />
      </div>
      <div className="flex-1">
        <select
          name="passingyear"
          value={searchParams.get('passingyear') || ''}
          onChange={handleInputChange}
          className="form-control w-full p-4 border text-xl rounded text-black"
        >
          <option value="" className="text-black">Select Year</option>
          {Array.from({ length: 20 }, (_, i) => 2023 - i).map((year) => (
            <option key={year} value={year} className="text-black">{year}</option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <input
          type="number"
          name="packageOffered"
          value={searchParams.get('packageOffered') || ''}
          onChange={handleInputChange}
          placeholder="CTC (in LPA)"
          className="form-control w-full p-4 border rounded text-xl text-black"
        />
      </div>
    </form>
  );
};

export default FilterForm;
