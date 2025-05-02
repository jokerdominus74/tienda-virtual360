import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email requerido'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Contraseña requerida'),
});

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Lógica de autenticación aquí
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-20'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Iniciar sesión</h2>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700'>Email</label>
        <input
          id='email'
          type='email'
          {...register('email')}
          className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
      </div>
      <div className='mb-4'>
        <label htmlFor='password' className='block text-gray-700'>Contraseña</label>
        <input
          id='password'
          type='password'
          {...register('password')}
          className={`w-full px-3 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
      </div>
      <button type='submit' className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
