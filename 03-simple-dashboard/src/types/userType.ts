interface UserInformacion {
    id: number;
    name: string;
    username: string;
    phone: string;
    website: string;
}

type Geo = {
    lat: string;
    lng: string;
};

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface User extends UserInformacion {
    address: Address;
    company: Company;
}
