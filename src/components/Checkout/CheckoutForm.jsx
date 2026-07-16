import "./CheckoutForm.css";

const CheckoutForm = ({
  buyer,
  handleChange,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit} className="checkout-form">

        <h1 className="checkout-title">
            Finalizar Compra
        </h1>

        <input
        className="form-control"
        type="text"
        name="nombre"
        value={buyer.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        required
        />

        <input
        className="form-control"
        type="text"
        name="telefono"
        value={buyer.telefono}
        onChange={handleChange}
        placeholder="Teléfono"
        required
        />

        <input
        className="form-control"
        type="email"
        name="email"
        value={buyer.email}
        onChange={handleChange}
        placeholder="Email"
        required
        />

        <input
        type="email"
        name="confirmarEmail"
        placeholder="Confirmar Email"
        value={buyer.confirmarEmail}
        onChange={handleChange}
        className="form-control"
        required
        />

        <button className="button-to-buy-checkoutform" type="submit">
            Confirmar compra
        </button>


    </form>
  );
};

export default CheckoutForm;