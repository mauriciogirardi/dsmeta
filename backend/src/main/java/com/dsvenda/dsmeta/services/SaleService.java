package com.dsvenda.dsmeta.services;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.dsvenda.dsmeta.entities.Sale;
import com.dsvenda.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {

  @Autowired
  private SaleRepository repository;

  public Page<Sale> findSales(String startDate, String endDate, Pageable pageable) {

    if (!startDate.equals("") || !endDate.equals("")) {
      LocalDate min = LocalDate.parse(startDate);
      LocalDate max = LocalDate.parse(endDate);

      return repository.findSales(min, max, pageable);
    }

    return repository.findAll(pageable);

  }
}
