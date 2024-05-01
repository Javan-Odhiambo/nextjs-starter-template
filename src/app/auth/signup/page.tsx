"use client"
import React , { useState} from 'react';
import { z } from 'zod'; // Import Zod

const user = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string()
      .min(6)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, 'Password must contain at least one uppercase letter and one digit'),
  });

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const validData = user.safeParse(formData);
            console.log(validData);
        } catch (err) {
            if (err instanceof z.ZodError) {
              console.log(err.issues);
            }
          }
    };

    return (
        <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
};

export default SignUpForm;
