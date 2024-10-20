/**
 * @schema OrderLineItem
 * type: object
 * description: The order line item's details.
 * x-schemaName: OrderLineItem
 * required:
 *   - id
 *   - title
 *   - requires_shipping
 *   - is_discountable
 *   - is_tax_inclusive
 *   - unit_price
 *   - raw_unit_price
 *   - quantity
 *   - raw_quantity
 *   - detail
 *   - created_at
 *   - updated_at
 *   - original_total
 *   - original_subtotal
 *   - original_tax_total
 *   - item_total
 *   - item_subtotal
 *   - item_tax_total
 *   - total
 *   - subtotal
 *   - tax_total
 *   - discount_total
 *   - discount_tax_total
 *   - refundable_total
 *   - refundable_total_per_unit
 *   - raw_original_total
 *   - raw_original_subtotal
 *   - raw_original_tax_total
 *   - raw_item_total
 *   - raw_item_subtotal
 *   - raw_item_tax_total
 *   - raw_total
 *   - raw_subtotal
 *   - raw_tax_total
 *   - raw_discount_total
 *   - raw_discount_tax_total
 *   - raw_refundable_total
 *   - raw_refundable_total_per_unit
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The item's ID.
 *   title:
 *     type: string
 *     title: title
 *     description: The item's title.
 *   subtitle:
 *     type: string
 *     title: subtitle
 *     description: The item's subtitle.
 *   thumbnail:
 *     type: string
 *     title: thumbnail
 *     description: The item's thumbnail URL.
 *   variant_id:
 *     type: string
 *     title: variant_id
 *     description: The ID of the associated variant.
 *   product_id:
 *     type: string
 *     title: product_id
 *     description: The ID of the associated product.
 *   product_title:
 *     type: string
 *     title: product_title
 *     description: The item's product title.
 *   product_description:
 *     type: string
 *     title: product_description
 *     description: The item's product description.
 *   product_subtitle:
 *     type: string
 *     title: product_subtitle
 *     description: The item's product subtitle.
 *   product_type:
 *     type: string
 *     title: product_type
 *     description: The ID of the associated product's type.
 *   product_collection:
 *     type: string
 *     title: product_collection
 *     description: The ID of the associated product's collection.
 *   product_handle:
 *     type: string
 *     title: product_handle
 *     description: The item's product handle.
 *   variant_sku:
 *     type: string
 *     title: variant_sku
 *     description: The item's variant SKU.
 *   variant_barcode:
 *     type: string
 *     title: variant_barcode
 *     description: The item's variant barcode.
 *   variant_title:
 *     type: string
 *     title: variant_title
 *     description: The item's variant title.
 *   variant_option_values:
 *     type: object
 *     description: The associated variant's values for the associated product's options.
 *     example:
 *       Color: Red
 *   requires_shipping:
 *     type: boolean
 *     title: requires_shipping
 *     description: Whether the item requires shipping.
 *   is_discountable:
 *     type: boolean
 *     title: is_discountable
 *     description: Whether the item is discountable.
 *   is_tax_inclusive:
 *     type: boolean
 *     title: is_tax_inclusive
 *     description: Whether the item's price includes taxes.
 *   compare_at_unit_price:
 *     type: number
 *     title: compare_at_unit_price
 *     description: The original price of the item before a promotion or sale.
 *   raw_compare_at_unit_price:
 *     type: object
 *     description: The item's raw compare at unit price.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw compare at unit price's value.
 *           - type: number
 *             title: value
 *             description: The raw compare at unit price's value.
 *   unit_price:
 *     type: number
 *     title: unit_price
 *     description: The item's price for a single quantity.
 *   raw_unit_price:
 *     type: object
 *     description: The item's raw unit price.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw unit price's value.
 *           - type: number
 *             title: value
 *             description: The raw unit price's value.
 *   quantity:
 *     type: number
 *     title: quantity
 *     description: The item's quantity.
 *   raw_quantity:
 *     type: object
 *     description: The item's raw quantity.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw quantity's value.
 *           - type: number
 *             title: value
 *             description: The raw quantity's value.
 *   tax_lines:
 *     type: array
 *     description: The item's tax lines.
 *     items:
 *       $ref: "#/components/schemas/OrderLineItemTaxLine"
 *   adjustments:
 *     type: array
 *     description: The item's adjustments.
 *     items:
 *       $ref: "#/components/schemas/OrderLineItemAdjustment"
 *   detail:
 *     $ref: "#/components/schemas/OrderItem"
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The date the item was created.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The date the item was updated.
 *   metadata:
 *     type: object
 *     description: The item's metadata, can hold custom key-value pairs.
 *   original_total:
 *     type: number
 *     title: original_total
 *     description: The item's total including taxes and promotions.
 *   original_subtotal:
 *     type: number
 *     title: original_subtotal
 *     description: The item's total excluding taxes, including promotions.
 *   original_tax_total:
 *     type: number
 *     title: original_tax_total
 *     description: The total taxes of the item excluding promotions.
 *   item_total:
 *     type: number
 *     title: item_total
 *     description: The item's total for a single quantity, including taxes and promotions.
 *   item_subtotal:
 *     type: number
 *     title: item_subtotal
 *     description: The item's total for a single quantity, excluding taxes and including promotions.
 *   item_tax_total:
 *     type: number
 *     title: item_tax_total
 *     description: The total taxes of a single quantity of the item, including promotions.
 *   total:
 *     type: number
 *     title: total
 *     description: The item's total including taxes and promotions.
 *   subtotal:
 *     type: number
 *     title: subtotal
 *     description: The item's total excluding taxes, including promotions.
 *   tax_total:
 *     type: number
 *     title: tax_total
 *     description: The total taxes of the item, including promotions.
 *   discount_total:
 *     type: number
 *     title: discount_total
 *     description: The item's discount total.
 *   discount_tax_total:
 *     type: number
 *     title: discount_tax_total
 *     description: The total taxes on the discounted amount.
 *   refundable_total:
 *     type: number
 *     title: refundable_total
 *     description: The total amount of the item that can be refunded.
 *   refundable_total_per_unit:
 *     type: number
 *     title: refundable_total_per_unit
 *     description: The total amount that can be refunded of a single quantity of the item.
 *   raw_original_total:
 *     type: object
 *     description: The item's raw original total.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw original total's value.
 *           - type: number
 *             title: value
 *             description: The raw original total's value.
 *   raw_original_subtotal:
 *     type: object
 *     description: The item's raw original subtotal.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw original subtotal's value.
 *           - type: number
 *             title: value
 *             description: The raw original subtotal's value.
 *   raw_original_tax_total:
 *     type: object
 *     description: The item's raw original tax total.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw original tax total's value.
 *           - type: number
 *             title: value
 *             description: The raw original tax total's value.
 *   raw_item_total:
 *     type: object
 *     description: The item's raw item total.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw item total's value.
 *           - type: number
 *             title: value
 *             description: The raw item total's value.
 *   raw_item_subtotal:
 *     type: object
 *     description: The item's raw item subtotal.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw item subtotal's value.
 *           - type: number
 *             title: value
 *             description: The raw item subtotal's value.
 *   raw_item_tax_total:
 *     type: object
 *     description: The item's raw item tax total.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw item tax total's value.
 *           - type: number
 *             title: value
 *             description: The raw item tax total's value.
 *   raw_total:
 *     type: object
 *     description: The item's raw total.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw total's value.
 *           - type: number
 *             title: value
 *             description: The raw total's value.
 *   raw_subtotal:
 *     type: object
 *     description: The item's raw subtotal.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw subtotal's value.
 *           - type: number
 *             title: value
 *             description: The raw subtotal's value.
 *   raw_tax_total:
 *     type: object
 *     description: The item's raw tax total.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw tax total's value.
 *           - type: number
 *             title: value
 *             description: The raw tax total's value.
 *   raw_discount_total:
 *     type: object
 *     description: The item's raw discount total.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw discount total's value.
 *           - type: number
 *             title: value
 *             description: The raw discount total's value.
 *   raw_discount_tax_total:
 *     type: object
 *     description: The item's raw discount tax total.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw discount tax total's value.
 *           - type: number
 *             title: value
 *             description: The raw discount tax total's value.
 *   raw_refundable_total:
 *     type: object
 *     description: The item's raw refundable total.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw refundable total's value.
 *           - type: number
 *             title: value
 *             description: The raw refundable total's value.
 *   raw_refundable_total_per_unit:
 *     type: object
 *     description: The item's raw refundable total per unit.
 *     required:
 *       - value
 *     properties:
 *       value:
 *         oneOf:
 *           - type: string
 *             title: value
 *             description: The raw refundable total per unit's value.
 *           - type: number
 *             title: value
 *             description: The raw refundable total per unit's value.
 * 
*/

