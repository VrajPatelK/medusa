import DiscountService from "../../../../services/discount"
import { EntityManager } from "typeorm"

/**
 * @oas [delete] /discounts/{id}
 * operationId: "DeleteDiscountsDiscount"
 * summary: "Delete a Discount"
 * description: "Deletes a Discount."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Discount
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.discounts.delete(discount_id)
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request DELETE 'https://medusa-url.com/admin/discounts/{id}' \
 *       --header 'Authorization: Bearer {api_token}'
 * tags:
 *   - Discount
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             id:
 *               type: string
 *               description: The ID of the deleted Discount
 *             object:
 *               type: string
 *               description: The type of the object that was deleted.
 *               default: discount
 *             deleted:
 *               type: boolean
 *               description: Whether the discount was deleted successfully or not.
 *               default: true
 */
export default async (req, res) => {
  const { discount_id } = req.params

  const discountService: DiscountService = req.scope.resolve("discountService")
  const manager: EntityManager = req.scope.resolve("manager")
  await manager.transaction(async (transactionManager) => {
    return await discountService
      .withTransaction(transactionManager)
      .delete(discount_id)
  })

  res.json({
    id: discount_id,
    object: "discount",
    deleted: true,
  })
}
