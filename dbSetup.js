const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectId
const MongoError = require("mongodb").MongoError
    // {
    //     "_id": ObjectId("61a03f4f05614df1e4195405"),
    //         "name": "SUBADMIN",
    //             "isActive": true,
    // }
    ; (async () => {
        try {
            // mongodb://localhost:27017/cine
            const host = "mongodb://localhost:27017/"

            const client = await MongoClient.connect(host, { useNewUrlParser: true })
            const axis = client.db("axis_splash_dev")
            console.log("\x1b[32m", `Starting DB Setup `)
            console.log("----------------------------------\n")
            //inserting role
            let role = [
                {
                    "_id": ObjectId("61a03f4f05614df1e4195405"),
                    "name": "ADMIN",
                    "isActive": true,
                    "createdAt": "2021-11-26T01:58:39.582Z",
                    "updatedAt": "2021-11-26T01:58:39.582Z",
                    "__v": 0
                },
                {
                    "_id": "61a1f8cccfe6bf9c90189297",
                    "name": "JUDGE",
                    "isActive": true,
                    "createdAt": "2021-11-27T09:22:20.579Z",
                    "updatedAt": "2021-11-27T09:22:20.579Z",
                    "__v": 0
                },
                {
                    "name": "AUDIT",
                    "isActive": true,
                    "_id": "61a1f9d965e2ec253a61f1b9",
                    "createdAt": "2021-11-27T09:26:49.582Z",
                    "updatedAt": "2021-11-27T09:26:49.582Z",
                    "__v": 0
                }
            ]

            const { insertedCount } = await axis.collection("roles").insertMany(role)
            console.log("\x1b[32m", `${insertedCount} ROLES inserted`)


            let permission = [
                {
                    "_id": ObjectId("61a03f7505614df1e4195408"),
                    "name": "USER",
                    "isActive": true,
                    "createdAt": "2021-11-26T01:59:17.825Z",
                    "updatedAt": "2021-11-26T01:59:17.825Z",
                    "__v": 0
                },
                {
                    "_id": ObjectId("61a0604080bf7bd6a2fcad90"),
                    "name": "ROLE",
                    "isActive": true,
                    "createdAt": "2021-11-26T01:59:17.825Z",
                    "updatedAt": "2021-11-26T01:59:17.825Z",
                    "__v": 0
                },
                {
                    "_id": ObjectId("61a06fff8345626730c30534"),
                    "name": "PERMISSION",
                    "isActive": true,
                    "createdAt": "2021-11-26T01:59:17.825Z",
                    "updatedAt": "2021-11-26T01:59:17.825Z",
                    "__v": 0
                },
                {
                    "_id": ObjectId("61a070248345626730c30538"),
                    "name": "ROLEPERMISSION",
                    "isActive": true,
                    "createdAt": "2021-11-26T01:59:17.825Z",
                    "updatedAt": "2021-11-26T01:59:17.825Z",
                    "__v": 0
                },
                {
                    "_id": "61a1f93c0dccfca1baaf981f",
                    "name": "EVALUATE",
                    "isActive": true,
                    "createdAt": "2021-11-27T09:24:12.322Z",
                    "updatedAt": "2021-11-27T09:24:12.322Z",
                    "__v": 0
                },
                {
                    "_id": "61a1f9480dccfca1baaf9825",
                    "name": "AUDIT",
                    "isActive": true,
                    "createdAt": "2021-11-27T09:24:24.077Z",
                    "updatedAt": "2021-11-27T09:24:24.077Z",
                    "__v": 0
                }

            ]
            const perm = await axis.collection("permissions").insertMany(permission)
            console.log("\x1b[32m", `${perm.insertedCount} PERMISSIONS inserted`)

            let rolePermission = [
                {
                    "_id": ObjectId("61a03f7505614df1e4195408"),
                    "role": ObjectId("61a03f4f05614df1e4195405"),
                    "permission": ObjectId("61a03f7505614df1e4195408"),
                    "isActive": true,
                    "isRead": true,
                    "isCreate": true,
                    "isUpdate": true,
                    "isDelete": true,
                    "createdAt": "2021-11-26T02:17:04.746Z",
                    "updatedAt": "2021-11-26T02:17:04.746Z",
                    "__v": 0
                },
                {
                    "_id": ObjectId("61a060c780bf7bd6a2fcad96"),
                    "role": ObjectId("61a03f4f05614df1e4195405"),
                    "permission": ObjectId("61a0604080bf7bd6a2fcad90"),
                    "isActive": true,
                    "isRead": true,
                    "isCreate": true,
                    "isUpdate": true,
                    "isDelete": true,
                    "createdAt": "2021-11-26T02:17:04.746Z",
                    "updatedAt": "2021-11-26T02:17:04.746Z",
                    "__v": 0
                },
                {
                    "role": ObjectId("61a03f4f05614df1e4195405"),
                    "permission": ObjectId("61a06fff8345626730c30534"),
                    "isActive": true,
                    "isRead": true,
                    "isCreate": true,
                    "isUpdate": true,
                    "isDelete": true,
                    "_id": ObjectId("61a085065259cd09d888637e"),
                    "createdAt": "2021-11-26T06:56:06.110Z",
                    "updatedAt": "2021-11-26T06:56:06.110Z",
                    "__v": 0
                },
                {
                    "_id": ObjectId("61a0702d8345626730c3053c"),
                    "role": ObjectId("61a03f4f05614df1e4195405"),
                    "permission": ObjectId("61a070248345626730c30538"),
                    "isActive": true,
                    "isRead": true,
                    "isCreate": true,
                    "isUpdate": true,
                    "isDelete": true,
                    "createdAt": "2021-11-26T02:17:04.746Z",
                    "updatedAt": "2021-11-26T02:17:04.746Z",
                    "__v": 0
                },
                {
                    "_id": ObjectId("61a0702d8345626730c3053a"),
                    "role": ObjectId("61a1f8cccfe6bf9c90189297"),
                    "permission": ObjectId("61a1f93c0dccfca1baaf981f"),
                    "isActive": true,
                    "isRead": true,
                    "isCreate": true,
                    "isUpdate": true,
                    "isDelete": true,
                    "createdAt": "2021-11-26T02:17:04.746Z",
                    "updatedAt": "2021-11-26T02:17:04.746Z",
                    "__v": 0
                },
                {
                    "_id": ObjectId("61a0702d8345626730c3053b"),
                    "role": ObjectId("61a1f9d965e2ec253a61f1b9"),
                    "permission": ObjectId("61a1f9480dccfca1baaf9825"),
                    "isActive": true,
                    "isRead": true,
                    "isCreate": true,
                    "isUpdate": true,
                    "isDelete": true,
                    "createdAt": "2021-11-26T02:17:04.746Z",
                    "updatedAt": "2021-11-26T02:17:04.746Z",
                    "__v": 0
                }
            ]
            const rp = await axis.collection("rolepermissions").insertMany(rolePermission)
            console.log("\x1b[32m", `${rp.insertedCount} ROLES assigned`)

            let user = [
                {
                    "_id": ObjectId("61a043b091a38d1d8efa3b1c"),
                    "name": "user1",
                    "password": "admin",
                    "role": ObjectId("61a03f4f05614df1e4195405"),
                    "isActive": true,
                    "createdAt": "2021-11-26T02:17:20.080Z",
                    "updatedAt": "2021-11-26T02:17:20.080Z",
                    "__v": 0
                }
            ]
            const userRes = await axis.collection("adminusers").insertMany(user)
            console.log("\x1b[32m", `${userRes.insertedCount} user created successfully \n name - ${user[0].name} \npassword - admin`)
            console.log("----------------------------------\n")
            console.log("\x1b[32m", `name - ${user[0].name} \npassword - admin\n`)
            console.log("----------------------------------\n")

            console.log("\x1b[32m", `DB Setup completed succefully \n`)

            client.close()
            process.exit(0)
        } catch (e) {
            if (
                e instanceof MongoError &&
                e.message.slice(0, "Invalid Operation".length) === "Invalid Operation"
            ) {
                console.log("\x1b[32m", "No documents to update")
            } else {
                console.error("\x1b[31m", `Error during migration, ${e}`)
            }
            process.exit(1)
        }
    })()
