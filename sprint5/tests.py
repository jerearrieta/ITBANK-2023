import unittest
from movimiento import Movimiento


class ConversionDolarTest(unittest.TestCase):
	def test_positive(self):
		resultado = Movimiento.calcular_monto_total(1000, 1000)
		self.assertEqual(resultado, 1_750_000)

		resultado = Movimiento.calcular_monto_total(1e10, 1000)
		self.assertEqual(resultado, 17_500_000_000_000)

		resultado = Movimiento.calcular_monto_total(568.49838, 723.5403923)
		self.assertEqual(resultado, 719_830.1965524503295)

	def test_negative(self):
		self.assertRaises(ValueError, Movimiento.calcular_monto_total, 150.5, -5)
		self.assertRaises(ValueError, Movimiento.calcular_monto_total, -560, 500)
		self.assertRaises(ValueError, Movimiento.calcular_monto_total, -400, -100)

	def test_zero(self):
		resultado = Movimiento.calcular_monto_total(0, 1500)
		self.assertEqual(resultado, 0)

		resultado = Movimiento.calcular_monto_total(-0, 1500)
		self.assertEqual(resultado, 0)

		self.assertRaises(ValueError, Movimiento.calcular_monto_total, 500.1, 0)
		self.assertRaises(ValueError, Movimiento.calcular_monto_total, 0, 0)

	def test_type_error(self):
		self.assertRaises(TypeError, Movimiento.calcular_monto_total, 700, "1000")
		self.assertRaises(TypeError, Movimiento.calcular_monto_total, None, 0)
		self.assertRaises(TypeError, Movimiento.calcular_monto_total, True, False)
		self.assertRaises(TypeError, Movimiento.calcular_monto_total, {}, 800)
		self.assertRaises(TypeError, Movimiento.calcular_monto_total, 500, [])


class ComisionTest(unittest.TestCase):
	def test_positive(self):
		resultado = Movimiento.descontar_comision(1000, 0.1)
		self.assertEqual(resultado, 900)

		resultado = Movimiento.descontar_comision(1e10, 0.15)
		self.assertEqual(resultado, 8_500_000_000)

		resultado = Movimiento.descontar_comision(568.49838, 1)
		self.assertEqual(resultado, 0)

		self.assertRaises(ValueError, Movimiento.descontar_comision, 150_000, 1.2)

	def test_negative(self):
		self.assertRaises(ValueError, Movimiento.descontar_comision, 150_000.5, -0.1)
		self.assertRaises(ValueError, Movimiento.descontar_comision, -10_000, 0.2)
		self.assertRaises(ValueError, Movimiento.descontar_comision, -243_000, -1)

	def test_zero(self):
		resultado = Movimiento.descontar_comision(500_000_000, 0)
		self.assertEqual(resultado, 500_000_000)

		resultado = Movimiento.descontar_comision(0, 0.2)
		self.assertEqual(resultado, 0)

		resultado = Movimiento.descontar_comision(0, 0)
		self.assertEqual(resultado, 0)

	def test_type_error(self):
		self.assertRaises(TypeError, Movimiento.descontar_comision, 5000, "0.05")
		self.assertRaises(TypeError, Movimiento.descontar_comision, None, 0.1)
		self.assertRaises(TypeError, Movimiento.descontar_comision, True, False)
		self.assertRaises(TypeError, Movimiento.descontar_comision, {}, 800)
		self.assertRaises(TypeError, Movimiento.descontar_comision, 500, [])


class PlazoFijoTest(unittest.TestCase):
	def test_positive(self):
		resultado = Movimiento.calcular_monto_plazo_fijo(1000, 1)
		self.assertEqual(resultado, 2000)

		resultado = Movimiento.calcular_monto_plazo_fijo(1e10, 0.5)
		self.assertEqual(resultado, 15_000_000_000)

		resultado = Movimiento.calcular_monto_plazo_fijo(568.49838, 7.54)
		self.assertEqual(resultado, 4_854.9761652)

	def test_negative(self):
		self.assertRaises(ValueError, Movimiento.calcular_monto_plazo_fijo, 100_000, -1)
		self.assertRaises(ValueError, Movimiento.calcular_monto_plazo_fijo, -50_000, 500)
		self.assertRaises(ValueError, Movimiento.calcular_monto_plazo_fijo, -750_200.45, -0.5)

	def test_zero(self):
		resultado = Movimiento.calcular_monto_plazo_fijo(0, 3)
		self.assertEqual(resultado, 0)

		resultado = Movimiento.calcular_monto_plazo_fijo(150_000, 0)
		self.assertEqual(resultado, 150_000)

		resultado = Movimiento.calcular_monto_plazo_fijo(0, 0)
		self.assertEqual(resultado, 0)

		resultado = Movimiento.calcular_monto_plazo_fijo(-0, -0)
		self.assertEqual(resultado, 0)

	def test_type_error(self):
		self.assertRaises(TypeError, Movimiento.calcular_monto_plazo_fijo, 700, "1000")
		self.assertRaises(TypeError, Movimiento.calcular_monto_plazo_fijo, None, 0)
		self.assertRaises(TypeError, Movimiento.calcular_monto_plazo_fijo, True, False)
		self.assertRaises(TypeError, Movimiento.calcular_monto_plazo_fijo, {}, 800)
		self.assertRaises(TypeError, Movimiento.calcular_monto_plazo_fijo, 500, [])


if __name__ == "__main__":
	unittest.main()
