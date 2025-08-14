"use client";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import productCollection from '@/app/assets/resized/product-collection.jpg'
import washcloth1 from "@/app/assets/resized/washcloth-1.jpg";
import washcloth2 from "@/app/assets/resized/washcloth-2.jpg";
import washcloth3 from "@/app/assets/resized/washcloth-3.jpg";
import washcloth4 from "@/app/assets/resized/washcloth-4.jpg";
import washcloth5 from "@/app/assets/resized/washcloth-5.jpg";
import washcloth6 from "@/app/assets/resized/washcloth-6.jpg";
import washcloth7 from "@/app/assets/resized/washcloth-7.jpg";
import washcloth8 from "@/app/assets/resized/washcloth-8.jpg";
import washcloth9 from "@/app/assets/resized/washcloth-9.jpg";
import washcloth10 from "@/app/assets/resized/washcloth-10.jpg";

export function Products() {
  const imgs = [washcloth1, washcloth2, washcloth3, washcloth4, washcloth5, washcloth6, washcloth7, washcloth8, washcloth9, washcloth10]
  return (
    <section className="py-20 lg:py-40 bg-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center xl:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Våre produkter</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-muted-background">
            Spesialdesignede ergonomiske håndklær utviklet for helsesektoren med strategisk 
            plasserte gripehåndtak og forsterkede sømmer.
          </p>
        </motion.div>
      <div className="grid grid-cols-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto hidden"
          >
          <Image
            src={'/assets/resized/product-collection.jpg'}
            alt="ErgoSmart produktsamling"
            className="rounded-2xl shadow-2xl opacity-100"
            width={608}
            loading="lazy"
            classNames={{
              wrapper: "w-full"
            }}
            />
        </motion.div>


        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto lg:gap-8 xl:mt-3 mt-16">
          {[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Image
                src={`/assets/resized/washcloth-${1+ index}_converted.avif`}
                alt={`ErgoSmart produkt ${item}`}
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-100"
                loading="lazy"
                
                classNames={{
                  wrapper: "w-full aspect-rectangle"
                }}
                />
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}