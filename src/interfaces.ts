export interface CharacterLocation {
    name: string
    url: string
}

export interface ResourceBase {
    id: number
    name: string
    url: string
    created: string
}

export interface Character extends ResourceBase {
    status: 'Dead' | 'Alive' | 'unknown'
    species: string
    type: string
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
    origin: CharacterLocation
    location: CharacterLocation
    image: string
    episode: string[]
}

export interface Location extends ResourceBase {
    type: string
    dimension: string
    residents: string[]
}

export interface Episode extends ResourceBase {
    air_date: string
    episode: string
    characters: string[]
}

export interface User {
    email: string
    password: string
}

export interface OnSubmit {
    onSubmit: ({ email, password }: User) => void
}

export interface AuthContextValues {
    user: User | null
    signIn: (newUser: User, callback: (user: User | null) => void) => void
    signOut: (callback: (user: User | null) => void) => void
}
