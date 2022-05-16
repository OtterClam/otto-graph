// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Otto extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("tokenURI", Value.fromString(""));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("candidates", Value.fromBigIntArray(new Array(0)));
    this.set("legendary", Value.fromBoolean(false));
    this.set("portalStatus", Value.fromString(""));
    this.set("canOpenAt", Value.fromBigInt(BigInt.zero()));
    this.set("summonAt", Value.fromBigInt(BigInt.zero()));
    this.set("mintAt", Value.fromBigInt(BigInt.zero()));
    this.set("updateAt", Value.fromBigInt(BigInt.zero()));
    this.set("brs", Value.fromI32(0));
    this.set("rrs", Value.fromI32(0));
    this.set("rarityScore", Value.fromI32(0));
    this.set("items", Value.fromStringArray(new Array(0)));
    this.set("traits", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Otto entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Otto entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Otto", id.toString(), this);
    }
  }

  static load(id: string): Otto | null {
    return changetype<Otto | null>(store.get("Otto", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get candidates(): Array<BigInt> {
    let value = this.get("candidates");
    return value!.toBigIntArray();
  }

  set candidates(value: Array<BigInt>) {
    this.set("candidates", Value.fromBigIntArray(value));
  }

  get legendary(): boolean {
    let value = this.get("legendary");
    return value!.toBoolean();
  }

  set legendary(value: boolean) {
    this.set("legendary", Value.fromBoolean(value));
  }

  get portalStatus(): string {
    let value = this.get("portalStatus");
    return value!.toString();
  }

  set portalStatus(value: string) {
    this.set("portalStatus", Value.fromString(value));
  }

  get canOpenAt(): BigInt {
    let value = this.get("canOpenAt");
    return value!.toBigInt();
  }

  set canOpenAt(value: BigInt) {
    this.set("canOpenAt", Value.fromBigInt(value));
  }

  get summonAt(): BigInt {
    let value = this.get("summonAt");
    return value!.toBigInt();
  }

  set summonAt(value: BigInt) {
    this.set("summonAt", Value.fromBigInt(value));
  }

  get mintAt(): BigInt {
    let value = this.get("mintAt");
    return value!.toBigInt();
  }

  set mintAt(value: BigInt) {
    this.set("mintAt", Value.fromBigInt(value));
  }

  get updateAt(): BigInt {
    let value = this.get("updateAt");
    return value!.toBigInt();
  }

  set updateAt(value: BigInt) {
    this.set("updateAt", Value.fromBigInt(value));
  }

  get brs(): i32 {
    let value = this.get("brs");
    return value!.toI32();
  }

  set brs(value: i32) {
    this.set("brs", Value.fromI32(value));
  }

  get rrs(): i32 {
    let value = this.get("rrs");
    return value!.toI32();
  }

  set rrs(value: i32) {
    this.set("rrs", Value.fromI32(value));
  }

  get rarityScore(): i32 {
    let value = this.get("rarityScore");
    return value!.toI32();
  }

  set rarityScore(value: i32) {
    this.set("rarityScore", Value.fromI32(value));
  }

  get items(): Array<string> {
    let value = this.get("items");
    return value!.toStringArray();
  }

  set items(value: Array<string>) {
    this.set("items", Value.fromStringArray(value));
  }

  get traits(): Array<string> {
    let value = this.get("traits");
    return value!.toStringArray();
  }

  set traits(value: Array<string>) {
    this.set("traits", Value.fromStringArray(value));
  }
}

export class OttoItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("tokenURI", Value.fromString(""));
    this.set("wearable", Value.fromBoolean(false));
    this.set("slot", Value.fromI32(0));
    this.set("rootOwner", Value.fromBytes(Bytes.empty()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("amount", Value.fromI32(0));
    this.set("updateAt", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OttoItem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OttoItem entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("OttoItem", id.toString(), this);
    }
  }

  static load(id: string): OttoItem | null {
    return changetype<OttoItem | null>(store.get("OttoItem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get wearable(): boolean {
    let value = this.get("wearable");
    return value!.toBoolean();
  }

  set wearable(value: boolean) {
    this.set("wearable", Value.fromBoolean(value));
  }

  get slot(): i32 {
    let value = this.get("slot");
    return value!.toI32();
  }

  set slot(value: i32) {
    this.set("slot", Value.fromI32(value));
  }

  get rootOwner(): Bytes {
    let value = this.get("rootOwner");
    return value!.toBytes();
  }

  set rootOwner(value: Bytes) {
    this.set("rootOwner", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get parentTokenId(): BigInt | null {
    let value = this.get("parentTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set parentTokenId(value: BigInt | null) {
    if (!value) {
      this.unset("parentTokenId");
    } else {
      this.set("parentTokenId", Value.fromBigInt(<BigInt>value));
    }
  }

  get amount(): i32 {
    let value = this.get("amount");
    return value!.toI32();
  }

  set amount(value: i32) {
    this.set("amount", Value.fromI32(value));
  }

  get updateAt(): BigInt {
    let value = this.get("updateAt");
    return value!.toBigInt();
  }

  set updateAt(value: BigInt) {
    this.set("updateAt", Value.fromBigInt(value));
  }
}

export class Trait extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("slot", Value.fromString(""));
    this.set("code", Value.fromI32(0));
    this.set("brs", Value.fromI32(0));
    this.set("rrs", Value.fromI32(0));
    this.set("count", Value.fromI32(0));
    this.set("ottos", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Trait entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Trait entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Trait", id.toString(), this);
    }
  }

  static load(id: string): Trait | null {
    return changetype<Trait | null>(store.get("Trait", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get slot(): string {
    let value = this.get("slot");
    return value!.toString();
  }

  set slot(value: string) {
    this.set("slot", Value.fromString(value));
  }

  get code(): i32 {
    let value = this.get("code");
    return value!.toI32();
  }

  set code(value: i32) {
    this.set("code", Value.fromI32(value));
  }

  get brs(): i32 {
    let value = this.get("brs");
    return value!.toI32();
  }

  set brs(value: i32) {
    this.set("brs", Value.fromI32(value));
  }

  get rrs(): i32 {
    let value = this.get("rrs");
    return value!.toI32();
  }

  set rrs(value: i32) {
    this.set("rrs", Value.fromI32(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value!.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }

  get ottos(): Array<string> {
    let value = this.get("ottos");
    return value!.toStringArray();
  }

  set ottos(value: Array<string>) {
    this.set("ottos", Value.fromStringArray(value));
  }
}

export class Slot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("maxCount", Value.fromI32(0));
    this.set("topCountTraits", Value.fromStringArray(new Array(0)));
    this.set("traits", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Slot entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Slot entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Slot", id.toString(), this);
    }
  }

  static load(id: string): Slot | null {
    return changetype<Slot | null>(store.get("Slot", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get maxCount(): i32 {
    let value = this.get("maxCount");
    return value!.toI32();
  }

  set maxCount(value: i32) {
    this.set("maxCount", Value.fromI32(value));
  }

  get topCountTraits(): Array<string> {
    let value = this.get("topCountTraits");
    return value!.toStringArray();
  }

  set topCountTraits(value: Array<string>) {
    this.set("topCountTraits", Value.fromStringArray(value));
  }

  get traits(): Array<string> {
    let value = this.get("traits");
    return value!.toStringArray();
  }

  set traits(value: Array<string>) {
    this.set("traits", Value.fromStringArray(value));
  }
}

export class OttoProduct extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("productId", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("discountPrice", Value.fromBigInt(BigInt.zero()));
    this.set("uri", Value.fromString(""));
    this.set("amount", Value.fromI32(0));
    this.set("type", Value.fromString(""));
    this.set("factory", Value.fromBytes(Bytes.empty()));
    this.set("updateAt", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OttoProduct entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OttoProduct entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("OttoProduct", id.toString(), this);
    }
  }

  static load(id: string): OttoProduct | null {
    return changetype<OttoProduct | null>(store.get("OttoProduct", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get productId(): BigInt {
    let value = this.get("productId");
    return value!.toBigInt();
  }

  set productId(value: BigInt) {
    this.set("productId", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get discountPrice(): BigInt {
    let value = this.get("discountPrice");
    return value!.toBigInt();
  }

  set discountPrice(value: BigInt) {
    this.set("discountPrice", Value.fromBigInt(value));
  }

  get uri(): string {
    let value = this.get("uri");
    return value!.toString();
  }

  set uri(value: string) {
    this.set("uri", Value.fromString(value));
  }

  get amount(): i32 {
    let value = this.get("amount");
    return value!.toI32();
  }

  set amount(value: i32) {
    this.set("amount", Value.fromI32(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get factory(): Bytes {
    let value = this.get("factory");
    return value!.toBytes();
  }

  set factory(value: Bytes) {
    this.set("factory", Value.fromBytes(value));
  }

  get updateAt(): BigInt {
    let value = this.get("updateAt");
    return value!.toBigInt();
  }

  set updateAt(value: BigInt) {
    this.set("updateAt", Value.fromBigInt(value));
  }
}
