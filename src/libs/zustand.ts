import {create} from 'zustand'


type State = {
    FName:string;
    Email:string;
    LName:string;
    PNo:string;
    Country:string;
    UserName:string;
   Password:string;
   WptSo:string;
   WptSi:string;
   WptVi:string;
   WptTi:string;
   WptSoi:string;
   WptDi:string;
   WptOm:string;
   WptIs:string;
   WptOs:string;
   WptDft:string;
   WptDts:string;
   WptTed:string;
   WptPnum:string;
   isLoading:boolean;
   user:any;
   trips:any;
   spectrips:any;
  }
  type Action = {
    setFname: (FName: State['FName']) => void
    setLName: (LName: State['LName']) => void
    setEmail: (Email: State['Email']) => void
    setPNo: (PNo: State['PNo']) => void
    setCountry: (Country: State['Country']) => void
    setUserName: (UserName: State['UserName']) => void
    setPassword: (Password: State['Password']) => void
    setWptSo: (WptSo: State['WptSo']) => void
    setWptSi: (WptSi: State['WptSi']) => void
    setWptVi: (WptVi: State['WptVi']) => void
    setWptTi: (WptTi: State['WptTi']) => void
    setWptSoi: (WptSoi: State['WptSoi']) => void
    setWptDi: (WptDi: State['WptDi']) => void
    setWptOm: (WptOm: State['WptOm']) => void
    setWptIs: (WptIs: State['WptIs']) => void
    setWptOs: (WptOs: State['WptOs']) => void
    setWptDft: (WptDft: State['WptDft']) => void
    setWptDts: (WptDts: State['WptDts']) => void
    setWptTed: (WptTed: State['WptTed']) => void
    setWptPnum: (WptTi: State['WptPnum']) => void
    setisLoading: (isLoading:State['isLoading']) => void
    setUser: (user: State['user']) =>void
    setTrips: (trips: State['trips']) =>void
    setSpecTrips: (spectrips: State['spectrips']) => void
  }

export const createUser = create<State & Action>((set) => ({
    FName: '',
    LName: '',
    Email: '',
    PNo:'',
    Country: '',
    UserName:'',
    Password: '',
    WptSo:'',
    WptSi:'',
    WptVi:'',
    WptTi:'',
    WptSoi:'',
    WptDi:'',
    WptOm:'',
    WptIs:'',
    WptOs:'',
    WptDft:'',
    WptDts:'',
    WptTed:'',
    WptPnum:'',
    isLoading:false,
    user:[],
    trips:[],
    spectrips:[],
    setFname: (FName) => set(() => ({ FName: FName })),
    setLName: (LName) => set(() => ({ LName: LName })),
    setEmail: (Email) => set(() => ({ Email: Email })),
    setPNo: (PNo) => set(() => ({ PNo: PNo })),
    setCountry: (Country) => set(() => ({ Country: Country })),
    setUserName: (UserName) => set(() => ({ UserName: UserName })),
    setPassword: (Password) => set(() => ({ Password: Password })),
    setWptSo: (WptSo) => set(()=>({WptSo:WptSo})),
    setWptSi: (WptSi) => set(()=>({WptSi:WptSi})),
    setWptVi: (WptVi) => set(()=>({WptVi:WptVi})),
    setWptTi: (WptTi) => set(()=>({WptTi:WptTi})),
    setWptSoi: (WptSoi) => set(()=>({WptSoi:WptSoi})),
    setWptDi: (WptDi) => set(()=>({WptDi:WptDi})),
    setWptOm: (WptOm) => set(()=>({WptOm:WptOm})),
    setWptIs: (WptIs) => set(()=>({WptIs:WptIs})),
    setWptOs: (WptOs) => set(()=>({WptOs:WptOs})),
    setWptDft: (WptDft) => set(()=>({WptDft:WptDft})),
    setWptDts: (WptDts) => set(()=>({WptDts:WptDts})),
    setWptTed: (WptTed) => set(()=>({WptTed:WptTed})),
    setWptPnum: (WptPnum) => set(()=>({WptPnum:WptPnum})),
    setisLoading: (isLoading) => set(()=>({isLoading:isLoading})),
    setUser: (user) => set(()=>({user:user})),
    setTrips: (trips)=> set(()=>({trips:trips})),
    setSpecTrips:(spectrips) => set(()=>({spectrips:spectrips})),
  }))


  