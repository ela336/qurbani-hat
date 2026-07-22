"use client";

import { toast } from "react-hot-toast";


const BookingForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

       

        toast.success("Animal booked successfully!");

        e.target.reset();
    };

    return (
        <div className="bg-green-50 rounded-2xl p-6 mt-8">

            <h2 className="text-2xl font-bold mb-5">
                Book This Animal
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    required
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                    required
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input input-bordered w-full"
                    required
                />

                <textarea
                    placeholder="Your Address"
                    className="textarea textarea-bordered w-full"
                    rows="3"
                    required
                ></textarea>

                <button
                    className="btn btn-success w-full"
                >
                    Confirm Booking
                </button>

            </form>

        </div>
    );
};

export default BookingForm;