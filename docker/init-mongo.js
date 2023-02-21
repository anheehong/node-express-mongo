db = db.getSiblingDB('test_database')

db.createUser({
    user: 'test_user',
    pwd: 'test_pass',
    roles: [
      {
        role: 'readWrite',
        db: 'test_database',
      },
    ],
  });