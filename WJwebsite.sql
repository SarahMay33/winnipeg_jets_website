-- deletes previous table so no duplicates
TRUNCATE TABLE players;


-- player inserts 
INSERT INTO players (number, last_name, first_name, nickname, position, years_played)
VALUES 
(1, 'Comrie', 'Eric', 'Coms', 'Goalie', '2016-2019, 2021-2022, 2024-2026'),
(2, 'Demelo', 'Dylan', 'Smoke', 'Defense', "2022-Present"),
(4, 'Pionk', 'Neil', 'Peeler', 'Defense', "2019-Present"),
(5, 'Dillon', 'Brendon', 'Dilly', 'Defense', "2021-2024"),
(7, 'Namestnikov', 'Vladislav', 'Vladi', 'Forward', "2023-Present"),
(9, 'Copp', 'Andrew', 'Copper', 'Forward', "2014-2022"),
(9, 'Kane', 'Evander', 'Kaner', 'Forward', '2011-2015'),
(13, 'Vilardi', 'Gabriel', 'Gabe', 'Forward', "2023-Present"),
(17, 'Lowry', 'Adam', 'Lows', 'Forward', "2014-Present"),
(18, 'Little', 'Bryan', 'Litts', 'Forward', "2011-2020"),
(19, 'Toews', 'Johnathan', 'Tazer', 'Forward', "2025-2026"),
(22, 'Appleton', 'Mason', 'Apple', 'Forward', "2018-2021, 2022-2025"),
(26, 'Wheeler', 'Blake', 'Wheels', 'Forward', "2011-2023"),
(27, 'Ehlers', 'Nikolaj', 'Fly', 'Forward', "2015-2025"),
(29, 'Liane', 'Patrick', 'Hatrick', 'Forward', "2016-2021"),
(31, 'Pavelec', 'Onjre', 'Pavey', 'Goalie', "2011-2017"),
(33, 'Byfuglien', 'Dustin', 'Big Buff', 'Defense', "2011-2019"),
(37, 'Hellebuyck', 'Connor', 'Helle', 'Goalie', "2015-2026"),
(55, 'Scheifele', 'Mark', 'Scheif', 'Forward', "2011-Present"),
(57, 'Myers', 'Tyler', 'Mysie', 'Defense', "2015-2019"),
(64, 'Stanley', 'Logan', 'Stanimal', 'Defense', "2020-2026"),
(81, 'Connor', 'Kyle', 'KFC', 'Forward', "2016-Present"),
(85, 'Perreault', 'Mathieu', 'Frenchy', 'Forward', "2014-2021"),
(88, 'Schmidt', 'Nate', 'Schmitty', 'Defense', "2021-2024"),
(91, 'Perfetti', 'Cole', 'Fetts', 'Forward', "2020-Present");

SELECT * FROM players;

