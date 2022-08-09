import { defaultStoreGiftCardFields, defaultStoreGiftCardRelations } from "."

import GiftCardService from "../../../../services/gift-card"

/**
 * @oas [get] /gift-cards/{code}
 * operationId: "GetGiftCardsCode"
 * summary: "Retrieve Gift Card by Code"
 * description: "Retrieves a Gift Card by its associated unqiue code."
 * parameters:
 *   - (path) code=* {string} The unique Gift Card code.
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.giftCards.retrieve(code)
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/store/gift-cards/{code}'
 * tags:
 *   - Gift Card
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             gift_card:
 *               $ref: "#/components/schemas/gift_card"
 */
export default async (req, res) => {
  const { code } = req.params

  try {
    const giftCardService: GiftCardService =
      req.scope.resolve("giftCardService")
    const giftCard = await giftCardService.retrieveByCode(code, {
      select: defaultStoreGiftCardFields,
      relations: defaultStoreGiftCardRelations,
    })

    res.json({ gift_card: giftCard })
  } catch (error) {
    console.log(error)
    throw error
  }
}
