import { Inter } from "next/font/google";
import { UsersProvider } from "./contexts/users.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { EntriesProvider } from "./contexts/entries.context";
import { GlobalStyles } from "./globals";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<UsersProvider>
			<CategoriesProvider>
				<EntriesProvider>
					<html lang="en">
						<body className={inter.className}>
							<GlobalStyles />
							{children}
						</body>
					</html>
				</EntriesProvider>
			</CategoriesProvider>
		</UsersProvider>
	);
}
