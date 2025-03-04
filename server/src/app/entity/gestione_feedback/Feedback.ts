/**
 * Represents a Feedback entity.
 */
export class Feedback {
  /**
   * The rating given in the feedback.
   */
  private valutazione: number;
  /**
   * The comment provided in the feedback.
   */
  private commento: string;
  /**
   * The unique identifier of the user who provided the feedback.
   */
  private utenteId: number;
  /**
   * The unique identifier of the tutorial associated with the feedback.
   */
  private tutorialId: number;

  /**
   * Creates an instance of Feedback.
   * @param valutazione - The rating given in the feedback.
   * @param commento - The comment provided in the feedback.
   * @param utenteId - The unique identifier of the user who provided the feedback.
   * @param tutorialId - The unique identifier of the tutorial associated with the feedback.
   */
  constructor(
    valutazione: number,
    commento: string,
    utenteId: number,
    tutorialId: number,
  ) {
    this.valutazione = valutazione;
    this.commento = commento;
    this.utenteId = utenteId;
    this.tutorialId = tutorialId;
  }

  // Getter
  /**
   * Gets the rating given in the feedback.
   */
  public getValutazione(): number {
    return this.valutazione;
  }

  /**
   * Gets the comment provided in the feedback.
   */
  public getCommento(): string {
    return this.commento;
  }

  /**
   * Gets the unique identifier of the user who provided the feedback.
   */
  public getUtenteId(): number {
    return this.utenteId;
  }

  /**
   * Gets the unique identifier of the tutorial associated with the feedback.
   */
  public getTutorialId(): number {
    return this.tutorialId;
  }

  // Setter
  /**
   * Sets the rating given in the feedback.
   */
  public setValutazione(value: number) {
    this.valutazione = value;
  }

  /**
   * Sets the comment provided in the feedback.
   */
  public setCommento(value: string) {
    this.commento = value;
  }

  /**
   * Sets the unique identifier of the user who provided the feedback.
   */
  public setUtenteId(value: number) {
    this.utenteId = value;
  }

  /**
   * Sets the unique identifier of the tutorial associated with the feedback.
   */
  public setTutorialId(value: number) {
    this.tutorialId = value;
  }
}
