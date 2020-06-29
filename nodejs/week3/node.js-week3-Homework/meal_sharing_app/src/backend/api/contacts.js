const express = require("express");
const app = express;
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
	const contacts = await knex.select("*").table("contacts");
	res.send(contacts);
});

router.post("/", async function (req, res) {
	try {
		console.log(req.body);
		const newContact = {
			id: req.query.id,
			name: req.query.name,
			phonenumber: req.query.phonenumber,
		};
		await knex("contacts").insert(newContact);
		res.send("Contact added");
	} catch (error) {
		throw error;
	}
});

router.put("/:id", async (req, res) => {
	console.log(`params.id=${req.params.id}`);
	const thisContact = await knex("contacts")
		.where({ id: req.params.id })
		.update({ name: req.query.name });
	res.send("Came back with Homer");
});

router.get("/:id", async function (req, res) {
	try {
		console.log(`params.id=${req.params.id}`);
		const contactsWithId = await knex
			.select("*")
			.table("contacts")
			.where({ id: req.params.id });
		if (contactsWithId.length === 0) {
			res.send(`sorry no contacts with id ${req.params.id}`);
		}
		res.send(contactsWithId);
	} catch (error) {
		throw ("error", error);
	}
});

router.put("/:id", async function (req, res) {});

router.delete("/:id", async function (req, res, next) {
	let id = parseInt(req.params.id);

	await knex("contacts").delete(id);
	res.send("deleted ", id);
});

module.exports = router;
