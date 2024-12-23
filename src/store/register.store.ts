import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { RegisterState } from "../types";

const useRegisterStore = create<RegisterState>()(
  devtools(
    persist(
      (set) => ({
        phoneNumber: null,
        phone_number_verified_at: null,
        profileDetails: null,
        passcode: null,

        setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
        setPhoneNumberVerifiedAt: (phone_number_verified_at) =>
          set({ phone_number_verified_at }),
        setPasscode: (passcode) => set({ passcode }),
        setProfileDetails: (profileDetails) => set({ profileDetails }),

        resetStore: () =>
          set(
            {
              phoneNumber: null,
              phone_number_verified_at: null,
              profileDetails: null,
              passcode: null,
            },
            true,
          ),
      }),
      {
        name: "register-store",
        partialize: (state) => ({
          phoneNumber: state.phoneNumber,
          phone_number_verified_at: state.phone_number_verified_at,
          profileDetails: state.profileDetails,
        }),
      },
    ),
  ),
);

export default useRegisterStore;
