'use client';
import NavbarPlacement from '@/components/NavbarPlacement';
import FilterForm from '@/components/FilterForm';
import StudentsDetail from '@/components/StudentsDetail';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';
import { useRouter, useSearchParams } from 'next/navigation';

const PlacementManagement = () => {
  const router = useRouter();
  const searchParams = useSearchParams();



  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(null);
  const queryParams = searchParams.toString();

  useEffect(() => {
    const fetchStudents = async () => {
      console.log("calling Fetch");
      try {
        const response = await axios.get(`/api/placements?${queryParams}`);
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, [queryParams])

  useEffect(() => {
    const fetchUsers = async () => {
      console.log("calling Fetch");
      try {
        const response = await axios.post(`/api/getuser`);
        console.log(response);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchUsers();
  }, [])
  return (
    <div className="mx-auto">
      <NavbarPlacement />
      <FilterForm />
      {user && (
        <div className="my-4">
          <Link href="/addData">
            <button className="btn btn-success text-black bg-gold px-4 py-2 rounded">Add data</button>
          </Link>
        </div>
      )}
      <StudentsDetail students={students} />
    </div>
  );
};

export default PlacementManagement;
