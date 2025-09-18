import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Rush Labs | A mobile and web agency",
	description:
		"We build enterprise-grade solutions with the agility of a startup, combining technical excellence with speed of delivery. From concept to production in weeks, not months.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
			<body>{children}</body>
		</html>
	);
}
