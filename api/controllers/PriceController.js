// controllers/PriceController.js
const { Price } = require('../models');
const express = require('express');

exports.getAllPrices = async (req, res) => {
	try {
		const prices = await Price.findAll();
		res.status(200).json({ precios: prices });
	} catch (err) {
		// Maneja los errores y envía una respuesta de error
		console.error(err);
		// res.status(500).send('no hay precios')
	}
};

exports.createPrice = async (req, res) => {
	try {
		const { name, price } = req.body;
		const newPrice = await Price.create({ name, price });
		res.status(201).json(newPrice);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.updatePrice = async (req, res) => {
	try {
		const { id } = req.params;
		const { price } = req.body;
		const [updatedCount] = await Price.update({ price }, { where: { id } });
		if (updatedCount === 0) {
			res.status(404).json({ message: 'Precio no encontrado' });
		} else {
			res.json({ message: 'Precio actualizado' });
		}
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.deletePrice = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedCount = await Price.destroy({ where: { id } });
		if (deletedCount === 0) {
			res.status(404).json({ message: 'Precio no encontrado' });
		} else {
			res.json({ message: 'Precio eliminado' });
		}
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
