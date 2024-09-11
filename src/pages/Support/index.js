const Support = () => {
  return (
    <div className="flex justify-center items-center h-[85%]">
      <div className="bg-[#ffffff] w-[40%] p-[5%] rounded-lg">
        <div className="text-center text-4xl font-bold">
          Entre em contato conosco
        </div>
        <div className="text-center m-5">
          Tem uma pergunta? Gostaríamos muito de ouvir sua opinião. Envie-nos
          uma mensagem e Responderemos o mais breve possível.
        </div>
        <form className="w-[100%]">
          <label className="grid gird-cols w-[100%]">
            Mensagem
            <textarea
              className="h-48 outline-none p-3 border-2 rounded-lg mt-5"
              placeholder="Escreva sua mensagem aqui!..."
            />
          </label>
          <button className="w-[100%] bg-green-600 hover:bg-green-500 text-white text-xl rounded-lg py-3 mt-5">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
