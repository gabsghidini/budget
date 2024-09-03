export interface Children {
	children: React.ReactNode;
}

/* --- User --- */
export interface User {
	id: number | null;
	email: string | null;
	password: string | null;
	name: string | null;
	username: string | null;
	isAdmin: boolean | null;
}

export interface NewUser extends User {
	newUsername: string | null;
}

export interface UsersContextValue {
	users: User[];
	createUser: (user: User) => Promise<void>;
	readUsers: () => Promise<void>;
	updateUser: (user: NewUser) => Promise<void>;
	deleteUser: (id: number) => Promise<void>;
}

/* --- Entry --- */
export interface Entry {
	_id: string | null;
	entry: string | null;
	amount: number | null;
	category: string | null;
	createdBy: string | null;
}

export interface NewEntry {
	entry: string | null;
	amount: number | null;
	category: string | null;
	createdBy: string | null;
}

export interface EntriesContextValue {
	entries: Entry[];
	createEntry: (entry: NewEntry) => Promise<void>;
	readEntries: () => Promise<void>;
	updateEntry: (entry: Entry) => Promise<void>;
	deleteEntry: (id: string) => Promise<void>;
}

/* --- Category --- */
export interface Category {
	id: number | null;
	name: string | null;
	description: string | null;
}

export interface CategoriesContextValue {
	categories: Category[];
	createCategory: (category: Category) => Promise<void>;
	readCategories: () => Promise<void>;
	updateCategory: (category: Category) => Promise<void>;
	deleteCategory: (id: number) => Promise<void>;
}
