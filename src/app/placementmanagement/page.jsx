'use client';
import NavbarPlacement from '@/components/NavbarPlacement';
import FilterForm from '@/components/FilterForm';
import StudentsDetail from '@/components/StudentsDetail';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';
import { useSearchParams } from 'next/navigation';

const PlacementManagement = () => {
  const searchParams = useSearchParams();

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const queryParams = searchParams.toString();

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`/api/placements?${queryParams}`);
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }finally{
        setLoading(false)
      }
    };
    fetchStudents();
  }, [queryParams])

  useEffect(() => {
    setLoading(true)
    console.log(loading);
    const fetchUsers = async () => {
      try {
        const response = await axios.post(`/api/getuser`);
        console.log(response);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }finally{
        setLoading(false)
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
      <StudentsDetail students={students} loading={loading} />
    </div>
  );
};

export default PlacementManagement;
