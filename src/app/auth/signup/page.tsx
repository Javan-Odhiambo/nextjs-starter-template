"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod'; // Import Zod
import { zodResolver } from '@hookform/resolvers/zod';
import { error } from 'console';


//Should be imported from the types file.
type User = {
    name: string,
    email: string,
    password: string,
}

//Define the schema for the form
const userSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string()
    .min(6)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, 'Password must contain at least one uppercase letter and one digit'),
});


const SignUpPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<User>({
    resolver: zodResolver(userSchema),
  });

  //Function that handles submision of validated data
  const onSubmit = async (data: User) => {
    console.log(data);
    // Submit the data to your API or perform any other action
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" {...register('name')} />
          {errors.name && <div>{errors.name.message}</div>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register('email')} />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register('password')} />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
