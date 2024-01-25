import sqlite3 as sql

dbCon = sql.connect("Project\Python/filmflix.db")
cursor = dbCon.cursor()

def print_all_records():
    cursor.execute('SELECT * FROM tblfilms')
    records = cursor.fetchall()
    print("\nAll Records in tblfilms:")
    for record in records:
        print(record)

def add_record():
    title = input("Enter title: ")
    year_released = input("Enter year released: ")
    rating = input("Enter rating: ")
    duration = input("Enter duration: ")
    genre = input("Enter genre: ")

    cursor.execute('''
        INSERT INTO tblfilms (title, yearReleased, rating, duration, genre)
        VALUES (?, ?, ?, ?, ?)
    ''', (title, year_released, rating, duration, genre))
    dbCon.commit()
    print("Record added successfully!")

def delete_record():
    film_id = input("Enter filmID to delete: ")
    cursor.execute('DELETE FROM tblfilms WHERE filmID = ?', (film_id,))
    dbCon.commit()
    print("Record deleted successfully!")

def update_record():
    film_id = input("Enter filmID to update: ")
    new_title = input("Enter new title: ")
    new_year_released = input("Enter new year released: ")
    new_rating = input("Enter new rating: ")
    new_duration = input("Enter new duration: ")
    new_genre = input("Enter new genre: ")

    cursor.execute('''
        UPDATE tblfilms
        SET title=?, yearReleased=?, rating=?, duration=?, genre=?
        WHERE filmID=?
    ''', (new_title, new_year_released, new_rating, new_duration, new_genre, film_id))
    dbCon.commit()
    print("Record updated successfully!")

def print_all_films():
    print_all_records()

def print_films_by_genre():
    genre = input("Enter genre to filter: ")
    cursor.execute('SELECT * FROM tblfilms WHERE genre = ?', (genre,))
    records = cursor.fetchall()
    print("\nAll Records in tblfilms with Genre '{}':".format(genre))
    for record in records:
        print(record)

def print_films_by_year():
    year = input("Enter year to filter: ")
    cursor.execute('SELECT * FROM tblfilms WHERE yearReleased = ?', (year,))
    records = cursor.fetchall()
    print("\nAll Records in tblfilms with Year Released '{}':".format(year))
    for record in records:
        print(record)

def print_films_by_rating():
    rating = input("Enter rating to filter: ")
    cursor.execute('SELECT * FROM tblfilms WHERE rating = ?', (rating,))
    records = cursor.fetchall()
    print("\nAll Records in tblfilms with Rating '{}':".format(rating))
    for record in records:
        print(record)

while True:
    print("\nFilmFlix Options:")
    print("1. Add a record")
    print("2. Delete a record")
    print("3. Amend a record")
    print("4. Print all records")
    print("5. Print details of all films")
    print("6. Print all films of a particular genre")
    print("7. Print all films of a particular year")
    print("8. Print all films of a particular rating")
    print("9. Exit")

    choice = input("Enter your choice (1-9): ")

    if choice == '1':
        add_record()
    elif choice == '2':
        delete_record()
    elif choice == '3':
        update_record()
    elif choice == '4':
        print_all_records()
    elif choice == '5':
        print_all_films()
    elif choice == '6':
        print_films_by_genre()
    elif choice == '7':
        print_films_by_year()
    elif choice == '8':
        print_films_by_rating()
    elif choice == '9':
        break
    else:
        print("Invalid choice. Please enter a number between 1 and 9.")

dbCon.close()