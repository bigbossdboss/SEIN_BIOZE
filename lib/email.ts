type BookingEmailInput = {
  fullName: string;
  serviceName: string;
  date: string;
  slot: string;
};

export function buildBookingConfirmationEmail(input: BookingEmailInput) {
  return {
    subject: "Votre demande de rendez-vous a bien été reçue",
    html: `
      <p>Bonjour ${input.fullName},</p>
      <p>Merci pour votre demande concernant <strong>${input.serviceName}</strong>.</p>
      <p>Créneau souhaité : ${input.date} à ${input.slot}.</p>
      <p>Nous revenons vers vous rapidement pour confirmer votre rendez-vous et vous accompagner avec discrétion.</p>
      <p>L'équipe SEIN'BIOZE By Kris Design</p>
    `
  };
}

