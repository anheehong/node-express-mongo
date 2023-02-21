

db = db.getSiblingDB("admin");
db.createUser({
    user: 'user',
    pwd: 'pass',
    roles: [
      {
        role: 'readWrite',
        db: 'admin',
      },
    ],
  });