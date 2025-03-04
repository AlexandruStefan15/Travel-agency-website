import { getRandomDateInCurrentYear, addDaysToDate } from "../utils/helpers.js";

export default {
	products: [
		{
			id: 1,
			location: "Pahang",
			country: "Malaezia",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 700,
			is_available: true,
			date_departure: "23.12.2025",
			date_arrival: "29.12.2025",
			days: 7,
			stop_overs: 2,
			airport: "Bucuresti",
			images: [
				"/images/pahang/pahang1.jpg",
				"/images/pahang/pahang2.jpg",
				"/images/pahang/pahang3.jpg",
				"/images/pahang/pahang4.jpg",
				"/images/pahang/pahang5.jpg",
			],
			main_image: "/images/pahang/pahangHD.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [3.81376140396462, 103.340789642957],
		},
		{
			id: 2,
			location: "Cairo",
			country: "Egipt",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 900,
			is_available: true,
			date_departure: "05.06.2025",
			date_arrival: "10.06.2025",
			days: 6,
			stop_overs: 1,
			airport: "Cluj Napoca",
			images: [
				"/images/cairo/cairo1.jpg",
				"/images/cairo/cairo2.jpg",
				"/images/cairo/cairo3.jpg",
				"/images/cairo/cairo4.jpg",
				"/images/cairo/cairo5.jpg",
			],
			main_image: "/images/cairo/cairoHD.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [30.047136563679086, 31.235457994879386],
		},
		{
			id: 3,
			location: "Bora Bora",
			country: "Polinezia Franceză",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 1200,
			is_available: true,
			date_departure: "28.02.2025",
			date_arrival: "07.03.2025",
			days: 8,
			stop_overs: 1,
			airport: "Cluj Napoca",
			images: [
				"/images/borabora/borabora1.jpg",
				"/images/borabora/borabora3.jpg",
				"/images/borabora/borabora2.jpg",
				"/images/borabora/borabora4.jpg",
				"/images/borabora/borabora5.jpg",
				"/images/borabora/borabora6.jpg",
			],
			main_image: "/images/borabora/borabora1.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [-16.503577189808595, -151.75419863301],
		},
		{
			id: 4,
			location: "Dakar",
			country: "Senegal",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 600,
			is_available: true,
			date_departure: "20.03.2025",
			date_arrival: "25.03.2025",
			days: 6,
			stop_overs: 0,
			airport: "Bucuresti",
			images: [
				"/images/dakar/dakar1.jpg",
				"/images/dakar/dakar5.jpg",
				"/images/dakar/dakar3.jpg",
				"/images/dakar/dakar4.jpg",
				"/images/dakar/dakar2.jpg",
			],
			main_image: "/images/dakar/dakarBanner.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [14.716344940097294, -17.468029423217054],
		},
		{
			id: 5,
			location: "Bogota",
			country: "Columbia",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 650,
			is_available: true,
			date_departure: "04.01.2025",
			date_arrival: "10.01.2025",
			days: 7,
			stop_overs: 1,
			airport: "Bucuresti",
			images: [
				"/images/bogota/bogota1.jpg",
				"/images/bogota/bogota3.jpg",
				"/images/bogota/bogota2.jpg",
				"/images/bogota/bogota6.jpg",
				"/images/bogota/bogota4.jpg",
				"/images/bogota/bogota5.jpg",
			],
			main_image: "/images/bogota/bogota1.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [4.712613153175884, -74.06524309773346],
		},
		{
			id: 6,
			location: "Auckland",
			country: "Noua Zeelandă",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 800,
			is_available: true,
			date_departure: "07.08.2025",
			date_arrival: "13.08.2025",
			days: 7,
			stop_overs: 3,
			airport: "Cluj Napoca",
			images: [
				"/images/auckland/auckland1.jpg",
				"/images/auckland/auckland4.jpg",
				"/images/auckland/auckland6.jpg",
				"/images/auckland/auckland2.avif",
				"/images/auckland/auckland5.jpg",
				"/images/auckland/auckland3.jpg",
			],
			main_image: "/images/auckland/auckland1.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [-36.817077195280646, 174.76809052045695],
		},
		{
			id: 7,
			location: "Baobab Avenue",
			country: "Madagascar",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 1100,
			is_available: true,
			date_departure: "14.10.2025",
			date_arrival: "19.10.2025",
			days: 6,
			stop_overs: 2,
			airport: "Bucuresti",
			images: [
				"/images/baobab/baobab1.jpg",
				"/images/baobab/baobab5.jpg",
				"/images/baobab/baobab2.jpg",
				"/images/baobab/baobab3.jpg",
				"/images/baobab/baobab4.avif",
			],
			main_image: "/images/baobab/baobab1.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [-20.250309969946702, 44.41990957485522],
		},
		{
			id: 8,
			location: "Machu Picchu",
			country: "Peru",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 1200,
			is_available: true,
			date_departure: "07.05.2025",
			date_arrival: "13.05.2025",
			days: 7,
			stop_overs: 2,
			airport: "Cluj Napoca",
			images: [
				"/images/machuPicchu/machuPicchu1.jpg",
				"/images/machuPicchu/machuPicchu6.jpg",
				"/images/machuPicchu/machuPicchu2.jpg",
				"/images/machuPicchu/machuPicchu3.jpg",
				"/images/machuPicchu/machuPicchu5.jpg",
			],
			main_image: "/images/machuPicchu/machuPicchuBanner.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [-13.162953116050852, -72.5448985434203],
		},
		{
			id: 9,
			location: "Fuerteventura",
			country: "Spania",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 750,
			is_available: true,
			date_departure: "12.09.2025",
			date_arrival: "18.09.2025",
			days: 7,
			stop_overs: 0,
			airport: "Targu Mures",
			images: [
				"/images/fuerteventura/fuerteventura1.jpg",
				"/images/fuerteventura/fuerteventura2.jpg",
				"/images/fuerteventura/fuerteventura3.jpg",
				"/images/fuerteventura/fuerteventura4.jpg",
				"/images/fuerteventura/fuerteventura5.jpg",
			],
			main_image: "/images/fuerteventura/fuerteventura1.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [28.37841299467481, -14.050870142125595],
		},
		{
			id: 10,
			location: "Budapesta",
			country: "Ungaria",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 700,
			is_available: true,
			date_departure: "23.12.2025",
			date_arrival: "29.12.2025",
			days: 7,
			stop_overs: 0,
			airport: "Bucuresti",
			images: [
				"/images/budapesta/budapesta1.jpg",
				"/images/budapesta/budapesta2.jpg",
				"/images/budapesta/budapesta3.jpg",
				"/images/budapesta/budapesta4.jpg",
				"/images/budapesta/budapesta5.jpg",
				"/images/budapesta/budapesta6.jpg",
			],
			main_image: "/images/budapesta/budapesta1.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [47.50534215666629, 19.04536254483674],
		},
		{
			id: 11,
			location: "Reykjavik",
			country: "Islanda",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 950,
			is_available: true,
			date_departure: "05.06.2025",
			date_arrival: "10.06.2025",
			days: 6,
			stop_overs: 0,
			airport: "Cluj Napoca",
			images: [
				"/images/reykjavik/reykjavik1.jpg",
				"/images/reykjavik/islanda2.jpg",
				"/images/reykjavik/islanda3.jpg",
				"/images/reykjavik/islanda4.jpg",
				"/images/reykjavik/islanda5.jpg",
				"/images/reykjavik/islanda6.jpg",
			],
			main_image: "/images/reykjavik/reykjavik1.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [64.14927297034286, -21.96108506493378],
		},
		{
			id: 12,
			location: "Madeira",
			country: "Portugalia",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 1200,
			is_available: true,
			date_departure: "28.02.2025",
			date_arrival: "07.03.2025",
			days: 8,
			stop_overs: 0,
			airport: "Cluj Napoca",
			images: [
				"/images/madeira/madeira1.jpg",
				"/images/madeira/madeira4.jpg",
				"/images/madeira/madeira2.jpg",
				"/images/madeira/madeira3.jpg",
				"/images/madeira/madeira5.jpg",
				"/images/madeira/madeira6.jpg",
			],
			main_image: "/images/madeira/madeira1.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [32.77072819477106, -16.962932765265077],
		},
		{
			id: 13,
			location: "Kyoto",
			country: "Japonia",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 850,
			is_available: true,
			date_departure: "04.01.2025",
			date_arrival: "10.01.2025",
			days: 7,
			stop_overs: 2,
			airport: "Targu Mures",
			images: [
				"/images/kyoto/kyoto1.jpg",
				"/images/kyoto/kyoto2.jpg",
				"/images/kyoto/kyoto3.jpg",
				"/images/kyoto/kyoto4.jpg",
				"/images/kyoto/kyoto5.jpg",
				"/images/kyoto/kyoto6.jpg",
			],
			main_image: "/images/kyoto/kyoto1.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [35.02069679614377, 135.7612390966192],
		},
		{
			id: 14,
			location: "Stockholm",
			country: "Suedia",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 800,
			is_available: true,
			date_departure: "07.08.2025",
			date_arrival: "13.08.2025",
			days: 7,
			stop_overs: 0,
			airport: "Cluj Napoca",
			images: [
				"/images/stockholm/stockholm1.webp",
				"/images/stockholm/stockholm2.jpg",
				"/images/stockholm/stockholm3.jpg",
				"/images/stockholm/stockholm4.jfif",
				"/images/stockholm/stockholm5.jpg",
				"/images/stockholm/stockholm6.jpg",
			],
			main_image: "/images/stockholm/stockholm1.webp",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [59.32941612200112, 18.06853688671817],
		},
		{
			id: 15,
			location: "Seoul",
			country: "Coreea de Sud",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 950,
			is_available: true,
			date_departure: "14.10.2025",
			date_arrival: "20.10.2025",
			days: 7,
			stop_overs: 2,
			airport: "Bucuresti",
			images: [
				"/images/seoul/seoul1.jpg",
				"/images/seoul/seoul2.jpg",
				"/images/seoul/seoul3.jpg",
				"/images/seoul/seoul4.jpg",
				"/images/seoul/seoul5.jpg",
				"/images/seoul/seoul6.jpg",
			],
			main_image: "/images/seoul/seoul1.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [37.559963241158115, 126.9905594599087],
		},
		{
			id: 16,
			location: "Ho Chi Minh",
			country: "Vietnam",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 650,
			is_available: true,
			date_departure: "07.05.2025",
			date_arrival: "13.05.2025",
			days: 7,
			stop_overs: 1,
			airport: "Bucuresti",
			images: [
				"/images/hochiminh/hochiminh1.jpg",
				"/images/hochiminh/hochiminh3.jpg",
				"/images/hochiminh/hochiminh4.webp",
				"/images/hochiminh/hochiminh5.jpg",
				"/images/hochiminh/hochiminh6.jpg",
				"/images/hochiminh/hochiminh2.jpg",
			],
			main_image: "/images/hochiminh/hochiminh1.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [10.81468276600763, 106.64006049681748],
		},
		{
			id: 17,
			location: "Boracay",
			country: "Filipine",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 750,
			is_available: true,
			date_departure: "14.10.2025",
			date_arrival: "19.10.2025",
			days: 6,
			stop_overs: 2,
			airport: "Cluj Napoca",
			images: [
				"/images/boracay/boracay1.jpg",
				"/images/boracay/boracay6.jpg",
				"/images/boracay/boracay3.jpg",
				"/images/boracay/boracay4.jpg",
				"/images/boracay/boracay5.avif",
				"/images/boracay/boracay2.webp",
			],
			main_image: "/images/boracay/boracay1.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [11.968275029702479, 121.92456817585527],
		},
		{
			id: 18,
			location: "Delhi",
			country: "India",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			price: 900,
			is_available: true,
			date_departure: "14.10.2025",
			date_arrival: "20.10.2025",
			days: 7,
			stop_overs: 1,
			airport: "Targu Mures",
			images: [
				"/images/delhi/delhi1.jpg",
				"/images/delhi/delhi2.jpg",
				"/images/delhi/delhi3.jpg",
				"/images/delhi/delhi4.jpg",
				"/images/delhi/delhi5.webp",
				"/images/delhi/delhi6.jpg",
			],
			main_image: "/images/delhi/delhi1.jpg",
			objectives: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
				"Lorem ipsum dolor sit amet, consectetur adipiscing.",
			],
			coordinates: [28.678354724597863, 77.22094024118061],
		},
	],
};
