Spring LDAP auth
====================================================================================================

Examples of Spring Boot application that auth with LDAP source.


Quickstart
----------------------------------------------------------------------------------------------------

```bash
docker compose down && docker compose up --build
```

Access to http://localhost:3000/signin

| Username | Password  |
|----------|-----------|
| `cid`    | `edea`    |
| `squall` | `griever` |


How to Run for Dev
----------------------------------------------------------------------------------------------------

### Preparation

```bash
docker compose down && docker compose up openldap
```

### API

```bash
./mvnw clean spring-boot:run -pl api -Dspring-boot.run.arguments="
  --app.ldap.url=ldap://localhost:389
  --app.ldap.user-dn-pattern=uid={0},ou=people,dc=balamb-garden,dc=edu
  --app.ldap.group-search-base=ou=groups,dc=balamb-garden,dc=edu
  --app.ldap.group-search-filter=member={0}
  --app.ldap.admin-dn=cn=admin,dc=balamb-garden,dc=edu
  --app.ldap.admin-password=But_the_Owls_are_still_around
  --app.jwt.secret=random-string-of-32-characters-or-more-1234567890abcdef
  --app.jwt.issuer=http://localhost:8080
  --app.jwt.ttl=15m
  --app.cors.allow-origins=*
"
```

### UI

```bash
export NEXT_PUBLIC_API_BASE_URI="http://localhost:8080" \
npm run dev
```
